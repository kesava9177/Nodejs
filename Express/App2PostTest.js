const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());
// Middleware to parse JSON request bodies
app.use(express.json());

// Simple POST endpoint

app.post("/api/data", (req, res) => {
  const { name, age } = req.body; // read data from frontend
  console.log("Received:", name, age);

  res.json({ message: `Hello ${name}, age ${age}!` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
