// Imports
const express = require("express");
const fs = require("fs");
const path = require("path");

// intialize express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.use(express.static(__dirname + "/"));

// route paths
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});


// start listening for requests
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});