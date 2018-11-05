"use strict";

const fs = require("fs");
const Utils = require("../utils/utils");
const PresUtils = require("../utils/presentation_utils");


const contentDir = JSON.parse(process.env.CONFIG).contentDirectory;
const ContentModel = require("../models/content.model");


class ContentController {

    static list(req, res) {
        console.log("content.controller.list");
        PresUtils.listDirFiles(contentDir, res);
    }

    static create(req, res) {
        console.log("content.controller.create");

        let content = new ContentModel({
            id: Utils.generateUUID(),
            type: req.body["type"],
            title: req.body["title"]
        });

        if (content.type === "img") {
            fs.readFile(req.file.path, function (err, data) {
                if (err) {return Utils.handle_500_err(res, err);}

                content.setData(data);
                content.src = "/contents/" + content.id;
                content.fileName = Utils.getNewFileName(content.id, req.file.originalname);
                return handleContentModelCreate(res, content);
            });
        } else {
            content.src = req.body["src"];
            return handleContentModelCreate(res, content);
        }
    }

    static read(req, res) {
        console.log("content.controller.read");
        ContentModel.read(req.contentId, function(err, content) {
            if (err) {return Utils.handle_500_err(res, err);}

            if (req.query.json === "true") {
                return res.send(content);
            }
            if (content.type === "img") {
                return res.sendFile(Utils.getDataFilePath(content.fileName));
            }
            res.redirect(content.src);
        });
    }
}

function handleContentModelCreate(res, content) {
    ContentModel.create(content, function (err) {
        if (err) {return Utils.handle_500_err(res, err);}

        res.json(JSON.stringify(content));
        res.end();
    });
}

module.exports = ContentController;
