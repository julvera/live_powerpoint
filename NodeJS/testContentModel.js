'use strict';

var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var utils = require("./app/utils/utils.js");
var ContentModel = require("./app/models/content.model.js");

var content = new ContentModel({});

content.id = utils.generateUUID();
content.type = "myType";
content.title = "myTitle";
content.fileName = content.id + ".txt";
content.setData("It Works !");

console.log("---------- ContentModel ----------");
console.dir(ContentModel);
console.log("-------------------------------");
console.log("------------ content -------------");
console.dir(content);
console.log("-------------------------------");

function countFile() {
	var files = require('fs').readdirSync(CONFIG.contentDirectory);
	console.log('Count files : ' + files.length + ' files in ' + CONFIG.contentDirectory);
	return files.length;
}

function testCreate(content) {
	console.log("====== TEST CREATE =======");
	console.dir(content);

	return new Promise((resolve, reject) => {
		const nbFiles = countFile();
		ContentModel.create(content, function(err) {
			if (err) {
				console.error(err);
				return reject(err);
			}

			if (countFile() - nbFiles !== 2) {
				return reject(new Error('Les fichiers n\'ont pas été créés correctement'));
			}

			utils.readFileIfExists(utils.getMetaFilePath(content.id), function(err, data) {
                if (!!err) {
                    return reject(err);
                }

				if (!!JSON.parse(data.toString()).data) {
					return reject(new Error('Le champ \'data\' ne doit pas apparaitre dans le fichier de meta-données'));
				}

				utils.readFileIfExists(utils.getDataFilePath(content.fileName), function(err, data) {
                    if (!!err) {
                        return reject(err);
                    }
					if (data.toString() !== content.getData()) {
						return reject(new Error('Les fichiers n\'ont pas été créés correctement'));
					}
				});

				return resolve(content);
			});
		});
	});
}

function testRead(content) {
	console.log("====== TEST READ =======");
    console.dir(content);
		console.log(`DATA: ${content.getData()}`);

	return new Promise((resolve, reject) => {
		ContentModel.read(content.id, function(err, meta) {
			if (err) {
				console.error(err);
				return reject(err);
			}
			console.log(meta);

			utils.readFileIfExists(utils.getDataFilePath(content.fileName), function(err, data) {
				meta.setData(data);
				return resolve(meta);
			});
		});
	});
}

function testUpdate(content) {
	console.log("====== TEST UPDATE =======");
	console.dir(content);
	console.log(`DATA: ${content.getData()}`);

	content.title = "MOD_title";

	var newData = content.getData() + " YES,  IT IS !!!"
	content.setData(newData);

	return new Promise((resolve, reject) => {
		ContentModel.update(content, function(err) {
			if (err) {
				console.error(err);
				return reject(err);
			}
			console.dir(content);

			utils.readFileIfExists(utils.getDataFilePath(content.fileName), function(err, data) {
				if (!!err) {
					return reject(err);
				}
				if (data.toString() !== newData) {
					return reject(new Error('Les données ont mal été mises à jour'));
				}
				return resolve(content);
			});
		});
	});
}

function testDelete(content) {
	console.log("====== TEST DELETE =======");
    console.dir(content);
		console.log(`DATA: ${content.getData()}`);

	return new Promise((resolve, reject) => {
        const nbFiles = countFile();
		ContentModel.delete(content.id, function(err) {
			if (err) {
				console.error(err);
				return reject(err);
			}

			if (nbFiles - countFile() !== 2) {
				return reject(new Error('Probleme lors de la suppression des fichiers'));
			}

			console.dir("Slid supprimee");
			resolve();
		});
	});

}

function testErr(content) {
	console.log("====== TEST ERROR =======");
	var contentTest = new ContentModel(12);
	console.dir(contentTest);

	return testCreate(12)
		.then(console.log, function(err) {
			logError(err);

			content.id = null;
			return content;
		})
		.then(testCreate)
		.then(console.log, function(err) {
			logError(err);
			return content;
		})
		.then(testRead)
		.then(console.log, function(err) {
			logError(err);
			return content;
		})
		.then(testUpdate)
		.then(console.log, function(err) {
			logError(err);
			content.id = 12;
			return content;
		})
		.then(testUpdate)
		.then(console.log, function(err) {
			logError(err);
			return content;
		});
}

function logError(err) {
	console.error(">>> ERROR");
	console.error(err);
	console.error("<<< ERROR");
}

(function() {
	testCreate(content)
		.then(testRead)
		.then(testUpdate)
		.then(testDelete)
		.then(function() {
			console.log("========== TESTS PHASE 1 : OK ==========");
			return content;
		}, function(err) {
			logError(err);
			return Promise.reject(new Error("========== TESTS PHASE 1 : KO =========="));
		})
		.then(testErr)
		.then(function() {
			console.log("========== TESTS PHASE 2 : OK ==========");
		}, function(err) {
			return Promise.reject((!!err) ? err : new Error("========== TESTS PHASE 2 : KO =========="));
		})
		.then(function() {
			console.log("========== FIN TESTS ==========");
		}, function(err) {
			console.log(err.message);
		});
})();
