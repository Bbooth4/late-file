"use strict";

require('dotenv').config();

const PORT            = process.env.PORT || 8080;
const ENV             = process.env.ENV || "development";
const express         = require("express");
const bodyParser      = require("body-parser");
const sass            = require("node-sass-middleware");
const methodOverride  = require('method-override');
const fs              = require('fs');
const app             = express();

const knexConfig      = require("./knexfile");
const knex            = require("knex")(knexConfig[ENV]);
const morgan          = require('morgan');
const knexLogger      = require('knex-logger');
const cookieSession   = require('cookie-session');

app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: false,
  outputStyle: 'expanded'
}));

app.use(cookieSession({name:'session',
                      keys:['key']}));
app.use(methodOverride('_method'))

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
 