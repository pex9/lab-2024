'use strict';

var utils = require('../utils/writer.js');
var FilmspublicfilmId = require('../service/FilmspublicfilmIdService');

module.exports.getInvitedPublicFilm = function getInvitedPublicFilm (req, res, next, id) {
  FilmspublicfilmId.getInvitedPublicFilm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPublicFilm = function getPublicFilm (req, res, next, id) {
  FilmspublicfilmId.getPublicFilm(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateInvitedPublicFilm = function updateInvitedPublicFilm (req, res, next, body, id) {
  FilmspublicfilmId.updateInvitedPublicFilm(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
