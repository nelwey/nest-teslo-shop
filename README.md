<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  </a>
</p>

# Teslo Shop Backend (Dockerized)

A NestJS + PostgreSQL backend ready to run in containers.  
Includes JWT authentication, TypeORM, and seed data for development.

---

## 🚀 Quick Start

### 1️⃣ Clone this repository

```bash
git clone https://github.com/<your-username>/nest-teslo-shop.git
cd nest-teslo-shop
```
### 2️⃣ Create environment file
```bash
cp .env.template .env
```

### 🐳 Run with Docker
```bash
docker compose --env-file .env up -d --build
OR docker compose -f docker-compose.dev.yml --env-file .env up
```

#### After build, you can simply start next time with:
```bash
docker compose up -d
```
#### Check running containers:
```bash
docker ps
docker compose down
```

### 🔥 Development Mode (Hot Reload)
```bash
docker compose -f docker-compose.dev.yml --env-file .env up
```

### 🌱 Seed Data, Once the containers are running, execute the seed endpoint:
```bash
GET http://localhost:3000/api/seed
```

### 🧰 Tech Stack
- #### NestJS 10
- #### TypeORM
- #### PostgreSQL
- #### JWT Authentication
- #### Docker Compose


### 🧑‍💻 Author
Forked from Klerith/nest-teslo-shop

Customized & Dockerized by @nelwey