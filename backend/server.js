const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "pass") {
    res.status(200).json({ status: "success", message: "Login successful!" });
  } else {
    res.status(401).json({ status: "error", message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
