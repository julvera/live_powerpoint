"use strict";

const express = require("express");
const PresentationUtils = require("../utils/presentation_utils");

const router = express.Router();
module.exports = router;

const presDir = JSON.parse(process.env.CONFIG).presentationDirectory;


router.route("/loadPres")
	.get(function(req, res) {
        console.log("GET /loadPres");
        PresentationUtils.listDirFiles(presDir, res);
	});

router.route("/savePres")
	.post(function(req, res) {
        console.log("POST /savePres");
        PresentationUtils.saveNewPres(presDir, req, res);
	}
);
