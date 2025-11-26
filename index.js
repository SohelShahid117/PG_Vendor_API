const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
  console.log("hello world,enjoy PostgreSQL");
});

//read

app.get("/vendors", async (req, res) => {
  try {
    res.status(200).json({ message: "all vendors are returned" });
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.get("/vendors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `vendors id ${id}`, id: `${id}` });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//create
app.post("/vendors", async (req, res) => {
  try {
    const { name, email, cont, address, description } = req.body;
    res.status(201).json({
      message: `vendors are created name:${name},email:${email},description:${description}`,
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
    res.status(200).json({
      message: `vendors id: ${id} are deleted`,
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
