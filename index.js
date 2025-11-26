const express = require("express");
const app = express();
const port = 4000;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
  console.log("hello world,enjoy PostgreSQL");
});
