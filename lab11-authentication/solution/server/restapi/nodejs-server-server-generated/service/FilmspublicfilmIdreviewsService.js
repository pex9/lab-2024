'use strict';


/**
 * Create a review
 * Create a review for the public film with the specified identifier.
 *
 * body Review Representation of the review to be created
 * id Integer Unique identifier of the public film for which the review is to be created
 * returns Review
 **/
exports.createReview = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reviewerId" : 6,
  "$schema" : "$schema",
  "reviewDate" : "2000-01-23",
  "review" : "review",
  "filmId" : 0,
  "rating" : 2,
  "self" : "http://example.com/aeiou",
  "completed" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all reviews
 * Get all reviews issued for the public film with the specified identifier.
 *
 * id Integer Unique identifier of the public film for which reviews are to be retrieved
 * returns List
 **/
exports.getReviews = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reviewerId" : 6,
  "$schema" : "$schema",
  "reviewDate" : "2000-01-23",
  "review" : "review",
  "filmId" : 0,
  "rating" : 2,
  "self" : "http://example.com/aeiou",
  "completed" : false
}, {
  "reviewerId" : 6,
  "$schema" : "$schema",
  "reviewDate" : "2000-01-23",
  "review" : "review",
  "filmId" : 0,
  "rating" : 2,
  "self" : "http://example.com/aeiou",
  "completed" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

