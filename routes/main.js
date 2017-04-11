"use strict";

const checkEmails = require('../lib/checkEmails');
const express = require('express');
const router  = express.Router();
const fs = require('fs');
const fake_db = require('../db/fake_db');
const helper = require('../routes/helper');


// module.exports = (knex) => {

  router.get("/", (req, res) => {
    res.render("index");
  });

  router.post("/", (req, res) => {
  });

// }