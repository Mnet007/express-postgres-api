import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'userdb',
  password: 'mnaisdname',
  port: 5432,
});
