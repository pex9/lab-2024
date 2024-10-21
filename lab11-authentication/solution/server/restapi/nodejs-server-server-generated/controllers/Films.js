'use strict';

var utils = require('../utils/writer.js');
var Films = require('../service/FilmsService');

module.exports.createFilm = function createFilm (req, res, next) {
  var film = req.body;
  var owner = req.user.id;
  Films.createF(film,owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getPublicFilms = function getPublicFilms (req, res, next) {
  Films.getPublicFilms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getPrivateFilms = function getFilms (req, res, next) {
  Films.getPrivateFilms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

