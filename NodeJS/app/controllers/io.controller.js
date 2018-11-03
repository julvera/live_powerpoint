"use strict";

const ContentModel = require("../models/content.model.js");
const PresentationUtils = require("../utils/presentation_utils");

module.exports = this;

let socketMap = {};
let presId;
let currentSlide;
let lastSlide;


class IOController {

    static listen (server) {
        console.log("io.controller.listen");

        const io = require("socket.io").listen(server);
        io.sockets.on("connection", function (socket) {
            console.log("Un client est connecté !");

            socket.on("data_comm", function (id) {
                console.log("io.controller.data_comm");
                socketMap[id] = socket;
                console.log("New watcher : " + id);
            });

            socket.on("slidEvent", function (json_event) {
                console.log("io.controller.slidEvent");

                if (json_event.CMD === "START") {
                    console.log("CMD is START");
                    presId = json_event.PRES_ID;
                    currentSlide = 0;
                } else {
                    currentSlide = HandleCMD(json_event.CMD);
                }
                LoadSlide();
            });
            socket.emit("connection");
        });
    }
}

/** Read all presentation with /loadPres web service */
function LoadSlide () {
    PresentationUtils.loadPres(function (res) {
        lastSlide = res[presId]["slidArray"].length;
        let slideInfo = res[presId]["slidArray"][currentSlide];

        ContentModel.read(slideInfo.id, function (err, content) {
            if (err) {console.log(err); return err;}

            for (let element in socketMap) {
                socketMap[element].emit("currentSlidEvent", {
                    "content_src": content.src,
                    "content_type": content.type,
                    "content_title": content.title,
                    "title": slideInfo.title,
                    "description": slideInfo.txt
                });
            }
        });
    })
}

/** Determine next slide's id according to the given command */
function HandleCMD (cmd) {
    console.log(cmd);
    let nextSlide;

    switch (cmd) {
        case "NEXT":
            console.log("in next !");
            if (currentSlide < lastSlide) {
                nextSlide = currentSlide + 1;
            }
            break;
        case "PREV":
            console.log("in prev !");
            if (currentSlide > 0) {
                nextSlide = currentSlide - 1;
            }
            break;
        case "END":
            console.log("in end !");
            nextSlide = lastSlide;
            break;
        default :
            nextSlide = 0; //"BEGIN" and other tentatives
            return;
    }
    return nextSlide;
}

module.exports = IOController;
