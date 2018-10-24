'use strict'

var express = require("express");
var app = express();
var http = require("http");
var path = require("path");
var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var server = http.createServer(app);
server.listen(CONFIG.port);

var host = server.address().address;
var port = server.address().port;
console.log("serving on http://%s:%s", host, port);

var defaultRoute = require("./app/routes/default.route.js");
var contentRoute = require("./app/routes/content.route.js");
var prensentationRoute = require("./app/routes/presentation.route.js");
app.use(defaultRoute);
app.use(contentRoute);
app.use(prensentationRoute);

app.use(function(request, response, cb) {
	response.send("YO YO");
	cb();
});

app.use("/admin", express.static(path.join(__dirname, "public/admin")));
app.use("/watch", express.static(path.join(__dirname, "public/watch")));
