"use strict";

const express = require("express");
const router = express.Router();

module.exports = router;

router.route("/")
    .get(function(req, res) {
        res.send("It Works!");
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
