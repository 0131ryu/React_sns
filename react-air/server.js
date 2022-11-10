const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const axdata = require("./axdata.js");

app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);

app.get("/", async (req, res) => {
  await axdata("종로구", (error, { airquality } = {}) => {
    if (error) {
      res.send(error);
    }
    res.send(airquality);
  });
});

app.listen(8000, () => {
  console.log("The server is running at port 8000");
});
