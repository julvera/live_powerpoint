"use strict";

const fs = require("fs");
const Utils = require("../utils/utils");

const contentDir = JSON.parse(process.env.CONFIG).contentDirectory;
let ContentModel = require("../models/content.model");
let ControllerUtils = require("../utils/controller_utils");


class ContentController {

    static list(req, res) {
        console.log("content.controller.list");
        Utils.listDirFiles(contentDir, res);
    }

    static create(req, res) {
        console.log("content.controller.create");

        let content = new ContentModel({
            id: Utils.generateUUID(),
            type: req.body['type'],
            title: req.body['title']
        });

        if (content['type'] === 'img') {
            fs.readFile(req.file.path, function (err, data) {
                if (err) {return Utils.handle_500_err(res, err);}

                content.setData(data);
                content.src = '/contents/' + content.id;
                content.fileName = Utils.getNewFileName(content.id, req.file.originalname);
                return ControllerUtils.handleContentModelCreate(res, content);
            });
        } else {
            content.src = req.body['src'];
            return ControllerUtils.handleContentModelCreate(res, content);
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
                // console.log(fs.realpathSync(Utils.getDataFilePath(content.fileName)));
                return res.sendFile(Utils.getDataFilePath(content.fileName));
            }
            res.redirect(content.src);
        });
    }
}

module.exports = ContentController;
