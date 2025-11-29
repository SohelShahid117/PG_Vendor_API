// const { Pool } = require("pg");

// import { Pool } from "pg";
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  //   user: "database-user",
  //   user: "default",
  user: "postgres",
  port: 5432,
  database: "vendordb",
  password: "12345",
});

module.exports = pool;
