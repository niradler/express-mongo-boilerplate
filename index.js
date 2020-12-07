require("dotenv").config();
require("./models/connect");

const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());
app.use("/examples", routes);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

module.exports = app;
