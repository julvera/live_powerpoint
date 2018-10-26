"use strict";

const ContentModel = require("../models/content.model.js");
const PresentationUtils = require("../utils/presentation_utils");

module.exports = this;
let socket_map = {};


class IOController {

    static listen (server) {
        const io = require('socket.io').listen(server);

        console.log("io.controller.listen");

        io.sockets.on('connection', function (socket) {
            console.log('Un client est connecté !');

            socket.on('data_comm', function (id) {
                console.log('io.controller.data_comm');
                socket_map[id] = socket;
                console.log("New watcher : " + socket.id);
                console.log("Or maybe: " + id);
            });

            socket.on('slidEvent', function (json_object) {
                console.log('io.controller.slidEvent');

                if (json_object['CMD'] === "START") {
                    console.log("CMD is START");
                }
                else {
                    console.log(json_object['CMD']);
                    switch (json_object['CMD']) {
                        case "BEGIN":
                            console.log("in Begin !");
                            break;
                        case "NEXT":
                            console.log("in next !");
                            break;
                        case "PREV":
                            console.log("in prev !");
                            break;
                        case "END":
                            console.log("in end !");
                            break;
                        default :
                            return;
                    }
                }
            });
            // PresentationUtils.loadPres(function (res) {
            //     ContentModel.read(something, function (err, content) {
            //         if (!!err) {
            //             console.log(err);
            //             return err;
            //         }
            //
            //     });
            // });

            socket.emit('connection');
        });
    }
}

module.exports = IOController;
