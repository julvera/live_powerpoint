"use strict";

const Utils = require("../utils/utils");
const ContentModel = require("../models/content.model");


class ControllerUtils {
    static handleContentModelCreate(res, content) {
        ContentModel.create(content, function (err) {
            if (err) {return Utils.handle_500_err(res, err);}

            res.json(JSON.stringify(content));
            res.end();
        });
    }
}

module.exports = ControllerUtils;