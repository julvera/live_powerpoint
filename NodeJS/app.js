"use strict";

const CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

const express = require("express");
const session = require('express-session');
const http = require("http");
const path = require("path");
const bodyParser = require('body-parser');

const defaultRoute = require("./app/routes/default.route.js");
const IOController = require("./app/controllers/io.controller.js");
const contentRoute = require("./app/routes/content.route.js");
const presentationRoute = require("./app/routes/presentation.route.js");

const app = express();
const server = http.createServer(app);

app.use(session({secret:'H4RD2FINDSECRET'})); //Find harder
app.use(bodyParser.urlencoded({ extended: true }));

app.use(defaultRoute);
app.use(contentRoute);
app.use(presentationRoute);

app.use("/react", express.static(path.join(__dirname, "react_build")));
app.use("/", express.static(path.join(__dirname, "public/")));

server.listen(CONFIG.port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("serving on http://%s:%s", host, port);
});
IOController.listen(server);
