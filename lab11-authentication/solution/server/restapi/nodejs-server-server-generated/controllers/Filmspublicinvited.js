'use strict';

var utils = require('../utils/writer.js');
var Filmspublicinvited = require('../service/FilmspublicinvitedService');

module.exports.getInvitedPublicFilms = function getInvitedPublicFilms (req, res, next) {
  Filmspublicinvited.getInvitedPublicFilms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
