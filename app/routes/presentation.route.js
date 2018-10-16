"use strict";

var express = require("express");
var fs = require("fs");

var router = express.Router();
module.exports = router;

var CONFIG = JSON.parse(process.env.CONFIG);
var presDir = CONFIG.presentationDirectory;


router.route("/loadPres")
  .get(function(req, res) {
	res.send("prensentation loading!");
	var map = {};
	fs.readdir(presDir, function (err, files){
		if (err) {
			console.error(err);
			return res.status(500).end(err.message);
		}

		console.log("files are:");
		console.log(files);
		console.log("that's it");
		console.log(files.length);
		var nbrPres = 0;
		var listPres = [];
		for (var i = 0; i < files.length; i++) {
			nbrPres += 1;
			listPres.push(files[i]);
		}

		console.log("nbr presentations: " + nbrPres);
		console.log("liste presentations: " + listPres);

		var count = 0;
		listPres.forEach(function(fileName){
			console.log(fileName);
			fs.readFile(presDir + "/" + fileName, function(err, data) {
				if (err) {
					return console.log(err);
				}

				var jsonObject = JSON.parse(data);
				map[jsonObject.id] = jsonObject;
				count += 1;

				if (count == nbrPres){
					console.log(map);
					res.write(map);
					res.end;
				}
			})
		})
	})
  })

router.route("/savePres")
  .get(function(req, res) {
	res.send("prensentation saved!");
  })

