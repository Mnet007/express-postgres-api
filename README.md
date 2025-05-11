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

export const pool = new Pool({
    user: 'your_postgres_username',
    host: 'localhost',
    database: 'express_api_db',
    password: 'your_postgres_password',
    port: 5432,
});

npm start

GET http://localhost:5000/users

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
]

GET http://localhost:5000/users/1

POST http://localhost:5000/users
Content-Type: application/json

{
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25
}

PUT http://localhost:5000/users/1
Content-Type: application/json

{
  "name": "Alice B",
  "email": "aliceb@example.com",
  "age": 26
}

DELETE http://localhost:5000/users/1




