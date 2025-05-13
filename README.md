# Express PostgreSQL User API

## Setup
1. Install Node.js and PostgreSQL
2. Create a DB called `userdb`
3. Run the following SQL:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);