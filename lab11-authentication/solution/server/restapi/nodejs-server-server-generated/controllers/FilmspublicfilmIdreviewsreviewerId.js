'use strict';

var utils = require('../utils/writer.js');
var FilmspublicfilmIdreviewsreviewerId = require('../service/FilmspublicfilmIdreviewsreviewerIdService');

module.exports.getReview = function getReview (req, res, next, id, reviewerId) {
  FilmspublicfilmIdreviewsreviewerId.getReview(id, reviewerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateReview = function updateReview (req, res, next, body, id, reviewerId) {
  FilmspublicfilmIdreviewsreviewerId.updateReview(body, id, reviewerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
