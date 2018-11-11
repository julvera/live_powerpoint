"use strict";

const ContentModel = require("../models/content.model.js");
const PresentationUtils = require("../utils/presentation_utils");

module.exports = this;

let socketMap = {};
let presId;
let currentSlide;
let lastSlide;
let doLoad;


class IOController {

    static listen (server) {
        const io = require("socket.io").listen(server);
        io.sockets.on("connection", function (socket) {
            socket.on("data_comm", function (id) {
                socketMap[id] = socket;
                console.log("New watcher: " + id);
            });

            socket.on("slidEvent", function (json_event) {
                currentSlide = HandleCMD(json_event);
                if(presId !== undefined && doLoad) {
                    LoadSlide();
                }
            });

            socket.on("disconnect", function() {
                //This is pretty magic, called by the web browser itself
                delete socketMap[socket.id];
            });

            socket.emit("connection");
        });
    }
}

/** Read all presentation with /loadPres web service */
function LoadSlide () {
    PresentationUtils.loadPres(function (res) {
        lastSlide = res[presId]["slidArray"].length;
        let slideInfo = res[presId]["slidArray"][currentSlide - 1]; //indexes

        ContentModel.read(slideInfo.id, function (err, content) {
            if (err) {console.log(err); return err;}

            for (let socketId in socketMap) {
                console.log("Emitting to: " + socketId);
                socketMap[socketId].emit("currentSlidEvent", {
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
function HandleCMD (json_event) {
    console.log("JE SUIS ICIII PUTAIN DE MERDE PUTEUUUU")
    console.log(json_event.CMD);
    let nextSlide = currentSlide;

    doLoad = true;
    switch (json_event.CMD) {
        case "START":
            presId = json_event.PRES_ID;
            nextSlide = 1;
            break;
        case "NEXT":
            if (currentSlide < lastSlide) {
                nextSlide = currentSlide + 1;
            } else {console.log("No next slide"); doLoad = false}
            break;
        case "PREV":
            if (currentSlide > 0) {
                nextSlide = currentSlide - 1;
            } else {console.log("No previous slide"); doLoad = false}
            break;
        case "END":
            nextSlide = lastSlide;
            break;
        case "BEGIN":
            nextSlide = 1;
            break;

        default: //"PAUSE"
            doLoad = false;
            break;
    }
    return nextSlide;
}

module.exports = IOController;
