"use strict";

const express = require("express");
const Utils = require("../utils/utils");
const router = express.Router();

module.exports = router;


router.route("/login")
    .post(Utils.verify_login);
