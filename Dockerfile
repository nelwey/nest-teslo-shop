# --- build stage ---
FROM node:20-bookworm-slim AS builder

WORKDIR /app

# Faster layer caching
COPY package*.json ./
COPY tsconfig*.json ./

# (Optional) avoid failing on "engines": "17.x"
# RUN npm config set engine-strict false

RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Remove dev deps, keep only prod
RUN npm prune --omit=dev

# --- runtime stage ---
FROM node:20-bookworm-slim

WORKDIR /app
ENV NODE_ENV=production

# Copy only what we need to run
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main"]
