"use strict";

const Utils = require("../utils/utils");


class ContentModel {

    constructor ({id, type, title, fileName, src}) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.fileName = fileName;
        this.src = src;

        let data = null;
        this.setData = function (newData) {
            data = newData;
        };
        this.getData = function () {
            return data;
        };
    }

    static create (content, callback) {
        if (content === null
        || content.id === null
        || !(content instanceof ContentModel)) {
            return callback(new Error("Why the F would you create some broken shit ??"));
        }

        if (content.getData() !== null) {
            Utils.createContentFile(content, function (err, data) {
                return callback(err, data);
            });
        } else {
            Utils.createMetadataFile(content, function (err, data) {
                return callback(err, data);
            });
        }
    }

    static read (id, callback) {
        if (id === null) {
            return callback(new Error("Why the F would you give a null id to read ??"));
        }

        Utils.readFileIfExists(Utils.getMetaFilePath(id), function (err, data) {
            if (err) {return callback(err, data);}

            callback(null, new ContentModel(JSON.parse(data.toString())));
        });
    }

    static update (content, callback) {
        ContentModel.read(content.id, function (err, data) {
            if (err) {return callback(err, data)}

            ContentModel.create(content, function (err, data) {
                if (err) {return callback(err, data);}

                callback(null, content);
            });
        })
    }

    static delete (id, callback) {
        if (id === null) {
            return callback(new Error("Why the F would you give a null id to delete ??"));
        }

        Utils.readFileIfExists(Utils.getMetaFilePath(id), function(err, data) {
            if (err) {
                console.log(err.message);
                return callback(err);
            }

            Utils.unlinkFiles(JSON.parse(data), id, callback);
        });
    }
}

module.exports = ContentModel;
