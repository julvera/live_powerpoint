"use strict";

const fs = require("fs");
const path = require("path");
const http = require("http");


class PresentationUtils {

    static listDirFiles(dir, res) {
        let map = {};
        fs.readdir(dir, function (err, files) {
            if (err) {
                console.error(err);
                return res.status(500).end(err.message);
            }

            let listPres = [];
            for (let i = 0; i < files.length; i++) {
                if (path.extname(files[i]) === ".json") {
                    listPres.push(files[i]);
                }
            }

            listPres.forEach(function (fileName) {
                fs.readFile(path.join(dir, fileName), function (err, data) {
                    if (err) {return console.log(err);}

                    let jsonObject = JSON.parse(data);
                    map[jsonObject.id] = jsonObject;
                    if (listPres.length === Object.keys(map).length) {
                        res.json(map);
                        res.end();
                    }
                })
            })
        })
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
                if (err) {console.log("shit Happened");}

                res.end("File successfully saved!");
            });
        });
    }

    static loadPres (callback) {
        let request_params = {
            method:"GET",
            host:"localhost",
            port:"1337",
            path:"/loadPres",
            headers:{"Content-Type":"application/json"}
        };

        http.get(request_params, function (res) {
            res.on("data", function (chunk) {
                callback(JSON.parse(chunk));
            });
            res.on("error", function (err) {
                console.error(err)
            });
        });
    }
}

module.exports = PresentationUtils;
