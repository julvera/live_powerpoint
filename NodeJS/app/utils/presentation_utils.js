"use strict";

const fs = require("fs");
const path = require("path");
const http = require("http");
const Utils = require("./utils");


class PresentationUtils {

    static listDirFiles(dir, res) {
        Utils.listDirFiles(dir, res)
    }

    static saveNewPres(dir, req, res) {
        let data = "";
        req.on("data", function (chunk) {
            data += chunk.toString();
        });

        req.on("end", () => {
            let jsonObject = JSON.parse(data);
            let filePath = path.join(dir, jsonObject.id + ".pres.json");

            fs.writeFile(filePath, JSON.stringify(jsonObject), "utf8", function (err) {
                if (err) {
                    console.log("shit Happened");
                }

                res.end("File successfully saved!");
            });
        });
    }

    static loadPres (callback) {
        let request_params = {
            method:'GET',
            host:'localhost',
            port:'1337',
            path:'/loadPres',
            headers:{'Content-Type':'application/json'}
        };

        http.get(request_params, function (res) {
            res.on('data', function (chunk) {
                callback(JSON.parse(chunk));
            });
            res.on("error", function (err) {
                console.error(err)
            });
        });
    }
}

module.exports = PresentationUtils;