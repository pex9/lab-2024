'use strict';

var utils = require('../utils/writer.js');
var FilmspublicfilmIdreviews = require('../service/FilmspublicfilmIdreviewsService');

module.exports.createReview = function createReview (req, res, next, body, id) {
  FilmspublicfilmIdreviews.createReview(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReviews = function getReviews (req, res, next, id) {
  FilmspublicfilmIdreviews.getReviews(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
