"use strict";

let multer = require("multer");

let express = require("express");
let router = express.Router();
module.exports = router;

const multerMiddleware = multer({ "dest": "/tmp/" });
const contentController = require('./../controllers/content.controller');


router.route("/contents")
    .get(contentController.list)
    .post(multerMiddleware.single("file"), contentController.create);

