'use strict';

var utils = require('../utils/writer.js');
var Filmspublic = require('../service/FilmspublicService');

module.exports.getPublicFilms = function getPublicFilms (req, res, next) {
  Filmspublic.getPublicFilms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
