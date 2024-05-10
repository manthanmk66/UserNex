const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/database");
const router = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).json("Server Start");
});

app.listen(PORT, () => {
  console.log(`Server Started Running on ${PORT}`);
});
