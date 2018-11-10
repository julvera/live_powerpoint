"use strict";

const express = require("express");
const path = require("path");
const Utils = require("../utils/utils");
const router = express.Router();

module.exports = router;

router.route("/admin")
    .get(express.static(path.join(__dirname, "../../public/admin")));

router.route("/watch")
    .get(express.static(path.join(__dirname, "../../public/watch")));

router.route("/login")
    .post(Utils.verify_login);
