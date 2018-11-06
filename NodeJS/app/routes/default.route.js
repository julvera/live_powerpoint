"use strict";

const express = require("express");
const router = express.Router();
const main = require("./../../react_build/static/js/main.5586f740");

module.exports = router;

router.route("/")
    .get(main);
    // .get(function(req, res) {
    //     res.send("It Works!");
    // });
