"use strict";

const CONFIG = require("./config.json");
const path = require("path");
const fs = require("fs");

model.exports = ContentController;

class ContentController {
    static list (req, res, next) {
        console.log("content.controller.list");
        var final_json = {};
        fs.readdir(CONFIG.contentDirectory, function(err, data) {
            if (!!err) {
                console.log(err);
                res.status(500).end(err.message);
                return err;
            }
            var listFile = [];
            data.forEach(function(filename) {
                if (path.extname(filename) === ".json") {
                    listFile.push(filename)
                }
            });
            listFile.forEach(function(filename) {
                fs.readFile(utils.getDataFilePath(filename), function(err, content) {
                    if (err) {
                        console.log(err);
                        res.status(500).end(err.message);
                        return err;
                    }
                    final_json[JSON.parse(content)['id']] = new ContentModel(JSON.parse(content));
                    if (Object.keys(final_json).length === listFile.length) {
                        res.send(final_json);
                    }
                });
            })

        })
    }

    static create () {

    }

    static read () {

    }
}