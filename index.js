const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import { v4 as uuidv4 } from "uuid";
const { v4: uuidv4 } = require("uuid");
const pool = require("./db");

// uuidv4();

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
  console.log("hello world,enjoy PostgreSQL");
});

//read
app.get("/vendors", async (req, res) => {
  try {
    // const books = await pool.query("SELECT  * FROM  vendor_Info");
    const vendors = await pool.query(
      "SELECT  * FROM  vendor_Info WHERE name='HR'"
    );
    res
      .status(200)
      .json({ message: "all vendors are returned", data: vendors.rows });
    // res.status(200).json({ message: books.rows });
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.get("/vendors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const vendor1 = await pool.query(
      "SELECT  * FROM  vendor_Info WHERE id = $1",
      [id]
    );
    res.status(200).json({ message: vendor1.rows });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//create
app.post("/vendors", async (req, res) => {
  try {
    const { name, email, cont, address, description } = req.body;

    const ID = uuidv4();
    const newBook = await pool.query(
      "INSERT INTO vendor_info(id,name,description) VALUES($1,$2,$3) RETURNING *",
      [ID, name, description]
    );

    res.status(201).json({
      message: `vendors was created id:${ID} name:${name},email:${email},description:${description}`,
      data: newBook.rows,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//delete
app.delete("/vendors/:id", async (req, res) => {
  try {
    // const { name, email, cont, address, description } = req.body;
    const { id } = req.params;
    const deletedVendor = await pool.query(
      "DELETE FROM  vendor_Info WHERE id=$1",
      [id]
    );
    res.status(200).json({
      message: `vendors id: ${id} are deleted`,
      data: deletedVendor.rows,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//update
app.put("/vendors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({
      message: `vendor id:${id} are updated`,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//CRUD operation using postgreSQL
