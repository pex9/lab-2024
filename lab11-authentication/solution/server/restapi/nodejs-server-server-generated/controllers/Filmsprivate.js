'use strict';

var utils = require('../utils/writer.js');
var Filmsprivate = require('../service/FilmsprivateService');

module.exports.getFilms = function getFilms (req, res, next) {
  Filmsprivate.getFilms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
