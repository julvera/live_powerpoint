"use strict";

const CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

const express = require("express");
const http = require("http");
const path = require("path");

const defaultRoute = require("./app/routes/default.route.js");
const IOController = require("./app/controllers/io.controller.js");
const contentRoute = require("./app/routes/content.route.js");
const presentationRoute = require("./app/routes/presentation.route.js");

const app = express();
const server = http.createServer(app);

app.use(defaultRoute);
app.use(contentRoute);
app.use(presentationRoute);

app.use("/admin", express.static(path.join(__dirname, "public/admin")));
app.use("/watch", express.static(path.join(__dirname, "public/watch")));
app.use("/react", express.static(path.join(__dirname, "public/react")));
app.use("/static", express.static(path.join(__dirname, "public/react/static")));
server.listen(CONFIG.port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("serving on http://%s:%s", host, port);
});
IOController.listen(server);
