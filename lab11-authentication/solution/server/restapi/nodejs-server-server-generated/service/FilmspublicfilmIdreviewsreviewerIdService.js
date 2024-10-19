'use strict';


/**
 * Get a review
 * Get the review issued to the user with the specified identifier for the public film with the specified identifier.
 *
 * id Integer Unique identifier of the public film for which the review is to be retrieved
 * reviewerId Integer Unique identifier of the user for which the review is to be retrieved
 * returns Review
 **/
exports.getReview = function(id,reviewerId) {
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
 * Update a review
 * Update the review issued to the user with the specified identifier for the public film with the specified identifier.
 *
 * body Review Representation of the review to be updated
 * id Integer Unique identifier of the public film for which the review is to be updated
 * reviewerId Integer Unique identifier of the user for which the review is to be updated
 * returns Review
 **/
exports.updateReview = function(body,id,reviewerId) {
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

