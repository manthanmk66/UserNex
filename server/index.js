const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/database");
const router = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to the database
dbConnect();

// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// Routes
app.use(router);

// Default route
app.get("/", (req, res) => {
  res.status(200).json("Server Start");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started Running on ${PORT}`);
});
