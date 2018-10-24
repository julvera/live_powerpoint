"use strict";

let fs = require("fs");
const Utils = require("../utils/utils");


class ContentModel {

    constructor (object) {
        this.id = object.id;
        this.type = object.type;
        this.title = object.title;
        this.fileName = object.fileName;
        this.src = object.src;

        var data;
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
            || Object.getPrototypeOf(content) !== ContentModel.prototype) {
            return callback(new Error("Why the F would you do that?? (create)"));
        }
        console.log("############## Object !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + content);
        console.log("############## Object !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + content.getData());

        if (content.getData().length > 0) {
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
            return callback(new Error("Why the F would you do that?? (read)"));
        }

        Utils.readFile(id + ".meta.json", function (err, data) {
            if (err) {return callback(err, data);}

            let content = new ContentModel(data);
            content.setData(data.getData);
            callback(null, content);
        });
    }

    static update (content, callback) {
        this.read(content.id, function (err, data) {
            if (err) {return callback(err, data)}

            console.log("#################### data !!!!!!!!!!!!!!!!!!!!!!!!!" + data);
            console.log("########################################" + JSON.stringify(data));
            ContentModel.create(JSON.stringify(data), callback);
        })
    }

    static delete (id, callback) {
        if (id === null) {
            return callback(new Error("Why the F would you do that?? (delete)"));
        }

        fs.readFile(Utils.getMetaFilePath(id), 'utf8', function(err, data) {
            if (err) {
                console.log(err.message);
                return callback(err);
            }

            Utils.unlinkFiles(JSON.parse(data), id, callback);
        });
    }
}

module.exports = ContentModel;