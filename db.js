// const { Pool } = require("pg");

import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  //   user: "database-user",
  //   user: "default",
  user: "postgres",
  port: 5432,
  database: "vendorDB",
});

module.exports = pool
