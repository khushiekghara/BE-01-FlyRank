const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello FlyRank!"
  });
});

app.get("/about", (req, res) => {
  res.json({
    name: "Khushi Kumari",
    course: "BCA",
    internship: "FlyRank Backend AI Engineering"
  });
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});