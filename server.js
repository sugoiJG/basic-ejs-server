const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const pages = [
  { route: "/", title: "Home", content: "Welcome to the homepage!" },
  { route: "/about", title: "About", content: "Learn more about us." },
  { route: "/contact", title: "Contact", content: "Get in touch with us." },
];

app.get("/", async (req, res) => {
  res.render("home", pages[0]);
});
app.get("/about", async (req, res) => {
  res.render("about", pages[1]);
});
app.get("/contact", async (req, res) => {
  res.render("contact", pages[2]);
});




app.listen(port, () => {
  console.log("listening on port", port);
});
