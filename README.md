# Express + PostgreSQL CRUD API

This is a simple RESTful API built with **Express.js** and **PostgreSQL**. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on a `users` table.

## 🚀 Features

- Get all users
- Get a single user by ID
- Create a new user
- Update an existing user
- Delete a user
- Basic error handling
- Uses PostgreSQL for persistent data storage

---

## 📦 Technologies Used

- Node.js
- Express.js
- PostgreSQL
- `pg` Node.js package for PostgreSQL connection

---

## 📁 Project Structure
express-postgres-api/
├── controllers/       → Controller logic
├── routes/            → Route handlers
├── db.js              → PostgreSQL connection
├── .env               → Environment variables
├── index.js           → App entry point
├── package.json
└── README.md


---

## 🛠️ Setup Instructions

### 1. Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

### 2. Clone the Repository

```bash
git clone https://github.com/Mnet007/express-postgres-api.git
cd express-postgres-api
npm install

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INTEGER
);

PG_HOST=localhost
PG_PORT=5432
PG_USER=your_username
PG_PASSWORD=your_password
PG_DATABASE=your_database
PORT=5000


npm start

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | Get all users     |
| GET    | `/users/:id` | Get user by ID    |
| POST   | `/users`     | Create new user   |
| PUT    | `/users/:id` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |




