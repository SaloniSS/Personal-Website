const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
var cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const projects = require("./routes/projects");

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());

//Test 2
app.get("/", (req, res) => {
  res.status(200).send("Hello world!").end();
});

app.use("/api/v1/projects", projects);

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
