const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'userdb',
  password: 'mnaisdname',
  port: 5432,
});

module.exports = pool;
