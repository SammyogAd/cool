const express = require("express");
const hbs = require("hbs");
var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/views"));
hbs.registerHelper("getYearFull", () => {
  return new Date().getFullYear();
});
hbs.registerHelper("changeCase", dt => {
  return dt.toUpperCase();
});
//app.set("views", __dirname + "/public");
app.get("/", (req, res) => {
  res.render("home.hbs", {
    headingMsg: "Mustache-Inc",
    bodyMsg: "Handlebar Mustache is super cool"
  });
});
app.get("/about", (req, res) => {
  res.render("about.hbs", {
    headingMsg: "Mustache-Inc",
    imgUrl: "./views/images/help.jpg"
  });
});
app.get("/gallery", (req, res) => {
  res.render("gallery.hbs", {
    headingMsg: "Mustache-Inc",
    imgUrl: "./views/images/help.jpg"
  });
});
app.get("/our", (req, res) => {
  res.render("our.hbs", {
    headingMsg: "Mustache-Inc",
    imgUrl: "./views/images/help.jpg"
  });
});
app.get("/json", (req, res) => {
  res.send({
    name: "Mike",
    array: ["joe", "moe"]
  });
});
app.get("/error", (req, res) => {
  res.send({
    errorMessage: "Some not cool error"
  });
});

var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
