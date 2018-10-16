"use strict";

var express = require("express");
var router = express.Router();
module.exports = router;

router.route("/")
  .get(function(req, res) {
	res.send("content Works!");
  })
