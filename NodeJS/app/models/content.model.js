"use strict";

let utils = require("../utils/utils.js");
const data = new WeakMap();


class ContentModel {

    constructor (object) {
        this.id = object.id;
        this.type = object.type;
        this.title = object.title;
        this.fileName = object.fileName;
        this.src = object.src;
        this.setData(object.data);
    }

    getData () { return data.get(this); }

    setData (newData) { data.set(this, newData); }

    static create (content, callback) {
        console.log("create new file");

        if (content.type === "img") {
            utils.createFile(content.fileName, content.getData(), callback);
            console.log("CREATED " + fileName);
        }
        utils.createFile(content.id + ".meta.json", JSON.stringify(content), callback);
        callback();
    }

    static read (id, callback) {
        console.log("read file id : " + id);
        let content = utils.readFile(id + ".meta.json", callback);
        callback(null, content);
    }

    static update (content, callback) {
        if (content.type === "img" && !!content.data && content.data.length > 0) {
            utils.createFile(content.fileName, content.getData(), callback);
            console.log("UPDATED " + content.fileName);
        }
        utils.createFile(content.id + ".meta.json", JSON.stringify(content), callback);
        console.log("UPDATED " + content.id + ".meta.json");
        callback();
    }

    delete (id, callback) {

    }
}

module.exports = ContentModel;
