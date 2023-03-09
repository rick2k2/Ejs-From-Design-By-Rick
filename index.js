const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).render("index", { pageName: "Home Page" });
});
app.post("/register", (req, res) => {
  res.status(200).send("Register Data saved");
});
app.post("/login", (req, res) => {
  res.status(200).send("Login Data saved");
});
app.get("/login", (req, res) => {
  res.status(200).render("loginform",{pageName: "Login"});
});
app.get("/about", (req, res) => {
  res.status(200).render("about",{pageName: "About"});
});
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App is listening on ${PORT}`);
  } else {
    throw err;
  }
});
