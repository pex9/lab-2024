'use strict';

var utils = require('../utils/writer.js');
var FilmsprivatefilmId = require('../service/FilmsprivatefilmIdService');

module.exports.deleteFilm = function deleteFilm (req, res, next, id) {
  FilmsprivatefilmId.deleteFilm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilm = function getFilm (req, res, next, id) {
  FilmsprivatefilmId.getFilm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFilm = function updateFilm (req, res, next, body, id) {
  FilmsprivatefilmId.updateFilm(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
