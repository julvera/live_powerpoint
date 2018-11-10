"use strict";

const express = require("express");
const router = express.Router();
//const path = require("path");
const http = require("http");

module.exports = router;

// router.route("/")
//     .get(function(req, res) {
//
//         res.redirect("public");
//     });

router.route("/login")
    .post(function(request, response) {
        //console.log("/login " + request.body["login"]);

        console.log(request.query.login);
        console.log(request.query.password);
        let data = JSON.stringify({
            "login": request.query.login,
            "pwd": request.query.password
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
        //console.log(request);
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
                        console.log("admin motherfucker");
                        response.send(msg);
                    } else {
                        //response.redirect("/watch");
                        console.log("user tarlouse");

                        response.send(msg);
                    }
                }
            });
        });

         // req.write(data);
         // req.end();
    });


// router.post("/login", function(request, response) {
//     console.log("/login " + request.body["login"]);
//     let data = JSON.stringify({
//         "login": request.body["login"],
//         "password": request.body["password"]
//     });
//     let options = {
//         method: "POST",
//         host: "localhost",
//         port: "8000",
//         path: "TODO",
//         headers: {
//             "Content-Type": "application/json; charset=utf-8",
//             "Content-Length": data.length
//         }
//     };
//
//     if (request.body["login"] === "jul") {
//         console.log("ADMIN ");
//         response.send({"role": "ADMIN"});
//     }
//     else {
//         response.send({"role": "USER"});
//     }
// });
