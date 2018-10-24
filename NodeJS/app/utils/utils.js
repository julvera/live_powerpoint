"use strict";

let fs = require("fs");
let path = require("path");
let CONFIG = JSON.parse(process.env.CONFIG);
let ContentModel = require("../models/content.model.js/ContentModel");

module.exports = this;

this.createFile = function (fileName, content, cb) {
    fs.writeFile(path.join(CONFIG.contentDirectory, fileName), content, "utf8", function(err) {
        if (err) {
            console.log(err.message);
            return cb(err);
        }
    });
};

this.readFile = function (fileName, cb) {
    fs.readFile(path.join(CONFIG.contentDirectory, fileName), "utf8", function(err, data) {
        if (err) {
            console.log(err.message);
            return cb(err);
        }

        return new ContentModel(JSON.parse(data));
    });
};
