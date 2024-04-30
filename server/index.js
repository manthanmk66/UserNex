const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Server Start");
});

app.listen(PORT, () => {
  console.log(`Server Started Running on ${PORT}`);
});
