"use strict";

const express = require("express");
const http = require("http");
const router = express.Router();

module.exports = router;


router.route("/login")
    .post(function(request, response) {
        let data = JSON.stringify({
            "login": request.body["login"],
            "pwd": request.body["password"]
        });

        let options = {
            method: "POST",
            host: "localhost",
            port: "8080",
            path: "/FrontAuthWatcherWebService/rest/WatcherAuth",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Content-Length": data.length
            }
        };
        console.log(data);
        let req = http.request(options, function(res) {
            let msg = "";
            res.setEncoding("utf8");

            res.on("data", function(chunk) {
                msg += chunk;
            });

            res.on("end", function() {
                console.log(msg);
                if(msg === "")
                {
                    console.log("Empty reply from JEE webservice");
                    //response.redirect("/TODO: page d'erreur?");
                    response.send(msg);
                } else {
                    let reply = JSON.parse(msg);
                    if(reply.role === "admin"){
                        //response.redirect("/admin");
                        response.send(msg);
                    } else {
                        //response.redirect("/watch");
                        response.send(msg);
                    }
                }
            });
        });

        req.write(data);
        req.end();
    });
