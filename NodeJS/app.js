'use strict';

const CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

const express = require("express");
const http = require("http");
const path = require("path");
const defaultRoute = require("./app/routes/default.route.js");

const contentRoute = require("./app/routes/content.route.js");
const prensentationRoute = require("./app/routes/presentation.route.js");

const app = express();
const server = http.createServer(app);

app.use(defaultRoute);
app.use(contentRoute);
app.use(prensentationRoute);

app.use("/admin", express.static(path.join(__dirname, "public/admin")));
app.use("/watch", express.static(path.join(__dirname, "public/watch")));

server.listen(CONFIG.port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("serving on http://%s:%s", host, port);
});
