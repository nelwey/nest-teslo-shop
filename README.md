# Teslo Shop Backend

NestJS REST API for the Teslo Shop e-commerce app. Includes JWT auth, TypeORM, PostgreSQL, product CRUD, and image serving.

**Live API:** https://nest-teslo-shop-qd3t.onrender.com/api

---

## Tech Stack

- NestJS 10
- TypeORM + PostgreSQL
- JWT authentication
- Docker Compose

---

## Local Setup

### 1. Clone and configure

```bash
git clone https://github.com/<your-username>/nest-teslo-shop.git
cd nest-teslo-shop
cp .env.template .env
```

Edit `.env` with your database credentials.

### 2. Run with Docker

**Production-like build:**

```bash
docker compose --env-file .env up -d --build
```

**Development (hot reload):**

```bash
docker compose -f docker-compose.dev.yml --env-file .env up
```

**Useful commands:**

```bash
docker compose up -d          # start
docker compose down           # stop
docker ps                     # check containers
```

### 3. Seed the database

Once the API is running:

```bash
GET http://localhost:3000/api/seed
```

Or open that URL in your browser. This loads users and products with bundled product images from `static/products/`.

**Default admin user:** `test1@google.com` / `Abc123`

---

## Deploying on Render (free tier)

### Environment variables

| Key | Example |
|-----|---------|
| `STAGE` | `prod` |
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `HOST_API` | `https://nest-teslo-shop-qd3t.onrender.com/api` |
| `DB_HOST` | your Neon host |
| `DB_PORT` | `5432` |
| `DB_NAME` | your database name |
| `DB_USERNAME` | your database user |
| `DB_PASSWORD` | your database password |
| `JWT_SECRET` | a secure secret |

### Docker settings

| Setting | Value |
|---------|-------|
| Dockerfile Path | `./Dockerfile` |
| Build Context | `.` |

---

## Product images on Render

Render's **free tier does not include persistent disk storage**. Uploaded images are stored on the container filesystem and are **lost on every redeploy or restart**.

Seed product images are bundled inside the Docker image (`static/products/`) and keep working after redeploys. Custom images uploaded through the admin panel do not.

### Broken product images?

If products show broken images (400/404 on `/api/files/product/...`), reset the catalog to the bundled seed data:

```bash
GET https://nest-teslo-shop-qd3t.onrender.com/api/seed
```

> **Note:** Running seed deletes all existing products and users, then reloads the default catalog.

For persistent custom uploads in production, you would need a paid Render plan with disk storage, or an external service such as Cloudinary or S3.

---

## API

- Swagger docs: `/api` (when running locally: http://localhost:3000/api)
- Products: `GET /api/products`
- Auth: `POST /api/auth/login`, `POST /api/auth/register`
- Files: `GET /api/files/product/:imageName`

---

## Author

Forked from [Klerith/nest-teslo-shop](https://github.com/Klerith/nest-teslo-shop).  
Customized and Dockerized by @nelwey.
