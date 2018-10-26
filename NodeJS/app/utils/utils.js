"use strict";

let fs = require("fs");
let path = require("path");
let CONFIG = JSON.parse(process.env.CONFIG);


class Utils {

    static createContentFile (content, cb) {
        let filePath = Utils.getDataFilePath(content.fileName);
        fs.writeFile(filePath, content.getData(), "utf8", function(err) {
            if (err) {
                console.error(err);
                return cb(err);
            }

            cb(null, Utils.createMetadataFile(content, cb));
        });
    };

    static createMetadataFile (content, cb) {
        let filePath = Utils.getMetaFilePath(content.id);
        fs.writeFile(filePath, JSON.stringify(content), "utf8", function(err) {
            if (err) {
                console.error(err);
                return cb(err);
            }

            return cb();
        });
    };

    static unlinkFiles (obj, id, callback) {
        fs.unlink(Utils.getMetaFilePath(id), function(err) {
            if (err) {
                console.error(err);
                return callback(err);
            }
            fs.unlink(Utils.getDataFilePath(obj.fileName), function(err) {
                if (err) {
                    console.error(err);
                    return callback(err);
                }
                callback();
            });
        });
    }

    static readFile (fileName, cb) {
        fs.readFile(path.join(CONFIG.contentDirectory, fileName), "utf8", function(err, data) {
            if (err) {
                console.error(err);
                return cb(err);
            }

            cb(null, JSON.parse(data));
        });
    };

    static generateUUID () {
        let d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c==='x' ? r : (r&0x3|0x8)).toString(16);
        });
    };

    static fileExists (path, callback) {
        fs.stat(path, function(err, stat) {
            if (err) {
                callback(err);
            } else {
                if (stat.isFile()) {
                    callback(null);
                }
            }
        });
    };

    static readFileIfExists (path, callback) {
        Utils.fileExists(path, function(err) {
            if (err) {
                callback(err);
            } else {
                fs.readFile(path, callback);
            }
        });
    };

    static getMetaFilePath (id) {
        return path.join(CONFIG.contentDirectory, id + ".meta.json");
    };

    static getDataFilePath (fileName) {
        return path.join(CONFIG.contentDirectory, fileName);
    };

    static getNewFileName (id, originalFileName) {
        return id + '.' + originalFileName.split('.').pop();
    };
}

module.exports = Utils;