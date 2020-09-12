const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
require("dotenv").config();

const restaurants = require("./routers/restaurants");
const indexRouter = require("./routers");

const logger = require("./middleware/logger");

const app = express();

const PORT = process.env.PORT || 8080;
app.engine("hbs", hbs({ extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use(express.static(path.join(__dirname, "public")));

app.use("/apis/restaurants", restaurants);
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("listening port" + PORT);
});
