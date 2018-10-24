"use strict";

let express = require("express");
let fs = require("fs");
let path = require("path");

let router = express.Router();
module.exports = router;

let presDir = JSON.parse(process.env.CONFIG).presentationDirectory;


router.route("/loadPres")
	.get(function(req, res) {
		let map = {};
		fs.readdir(presDir, function (err, files){
			if (err) {
				console.error(err);
				return res.status(500).end(err.message);
			}
			let listPres = [];
			for (let i = 0; i < files.length; i++) {
				if (path.extname(files[i]) === ".json") {
					listPres.push(files[i]);
				}
			}

			listPres.forEach(function(fileName){
				fs.readFile(presDir + "/" + fileName, function(err, data) {
					if (err) {return console.log(err);}

					let jsonObject = JSON.parse(data);
					map[jsonObject.id] = jsonObject;
					if (listPres.length === Object.keys(map).length){
						console.log(map);
						res.send(map);
					}
				})
			})
		})
	}
);

router.route("/savePres")
	.post(function(req, res) {
		req.on("data", function (chunk) {
			let jsonObject = JSON.parse(chunk);
            let filePath = presDir + "/" + jsonObject.id + ".pres.json";

			fs.writeFile(filePath, JSON.stringify(jsonObject), "utf8", function (err) {
			    if (err) {console.log("shit Happened");}

			    res.send("File successfully saved!");
            })
		});
	}
);
