"use strict";

const multer = require("multer");
const express = require("express");
const contentController = require('./../controllers/content.controller');

let router = express.Router();
const multerMiddleware = multer({ "dest": "/tmp/" });


router.param('contentId', function(req, res, next, id) {
    console.log("router.param");
    req.contentId = id;
    next();
});

router.route("/contents")
    .get(contentController.list) //list metadata of slide's content
    .post(multerMiddleware.single("file"), contentController.create); //creates new given content

router.route('/contents/:contentId')
    .get(contentController.read);


module.exports = router;
