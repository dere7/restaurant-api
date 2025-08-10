# Restaurant & Food API

## Overview

This project implements a robust **backend API** using NestJS and Prisma, featuring endpoints for managing both **foods** and **restaurants** under the `/api/v1` namespace. A simple frontend is present only to demonstrate functionality. A Postman collection is included in the repository to facilitate API testing.

---

## Features

- **API Prefix**: All endpoints are under `/api/v1`
- **Models**:

  - **Restaurant**: Create, read, update, delete
  - **Food**: Create (with nested restaurant creation or linking), list (with pagination & optional search by name), retrieve, update, delete

- **Postman**: Full collection included (`postman/Restaurant-Food-API.postman_collection.json`)

---

## Quick Start

1. **Clone repository**

   ```bash
   git clone <repo-url>
   cd <repo>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**
   Copy `.env.example` to `.env` and set your database URL:

   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Apply Prisma migrations & generate client**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the server**

   ```bash
   npm run start:dev
   ```

6. **Access the API**

   - Create a food (with a new restaurant): `POST /api/v1/foods`
   - List foods with pagination and name search: `GET /api/v1/foods?page=1&name=pizza`
   - Full REST support for `/foods` and `/restaurants`

---

## Postman Collection

Located at:

```
restaurant.postman_collection.json
```

Import into Postman to test the following grouped requests:

- Foods: list, create, retrieve, update, delete
- Restaurants: list, create, retrieve, update, delete

---

## API Reference

### Foods (`/api/v1/foods`)

| Method | Path   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| GET    | `/`    | List foods (with `page` and optional `name`)      |
| POST   | `/`    | Create food (nested create of restaurant allowed) |
| GET    | `/:id` | Get a specific food with its restaurant           |
| PATCH  | `/:id` | Update a food (and optionally its restaurant)     |
| DELETE | `/:id` | Remove a food                                     |

### Restaurants (`/api/v1/restaurants`)

| Method | Path   | Description                  |
| ------ | ------ | ---------------------------- |
| GET    | `/`    | List restaurants             |
| POST   | `/`    | Create a restaurant          |
| GET    | `/:id` | Retrieve specific restaurant |
| PATCH  | `/:id` | Update a restaurant          |
| DELETE | `/:id` | Delete a restaurant          |

---

## Simple Frontend (Demo Only)

- A basic UI to:

  - Display list of foods
  - Add new food (with restaurant)

- **Not production-grade**—just enough to prove API works (per Path A)
