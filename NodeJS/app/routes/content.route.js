"use strict";

const multer = require("multer");
const express = require("express");
const contentController = require('./../controllers/content.controller');

let router = express.Router();
const multerMiddleware = multer({ "dest": "/tmp/" });


router.param('contentId', function(req, res, next, id) {
    req.contentId = id;
    next();
});

router.route("/contents")
    .get(contentController.list) //list metadata of slide's content
    .post(multerMiddleware.single("file"), contentController.create); //creates new content from form

router.route('/content/:contentId')
    .get(contentController.read)
    .put(contentController.update)
    .delete(contentController.delete);


module.exports = router;
