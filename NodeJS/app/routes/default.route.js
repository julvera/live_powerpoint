"use strict";

const express = require("express");
const path = require("path");
const Utils = require("../utils/utils");
const router = express.Router();

let ssn;

module.exports = router;

router.route("/admin")
    .get(function (req,res) {
        ssn = req.session;
        console.log(ssn);
        console.log(ssn.role);
        if (ssn.role === "admin") {
            express.static(path.join(__dirname, "../../public/admin"))
        } else {
            res.end("<h1>login first.</h1>");
        }
    });

router.route("/watch")
    .get(express.static(path.join(__dirname, "../../public/watch")));

router.route("/login")
    .post(Utils.verify_login);
