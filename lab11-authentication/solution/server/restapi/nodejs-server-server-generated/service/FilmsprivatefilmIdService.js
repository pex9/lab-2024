'use strict';


/**
 * Delete a film
 * Delete the film with the specified identifier created by the authenticated user.
 *
 * id Integer Unique identifier of the film to delete
 * no response value expected for this operation
 **/
exports.deleteFilm = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a film
 * Get the film with the specified identifier created by the authenticated user.
 *
 * id Integer Unique identifier of the film to retrieve
 * returns Film
 **/
exports.getFilm = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : 6,
  "private" : true,
  "watchDate" : "2000-01-23",
  "$schema" : "$schema",
  "rating" : 2,
  "self" : "http://example.com/aeiou",
  "id" : 0,
  "title" : "title",
  "favorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a film
 * Update the film with the specified identifier created by the authenticated user.
 *
 * body Film Representation of the film to be updated
 * id Integer Unique identifier of the film to update
 * returns Film
 **/
exports.updateFilm = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : 6,
  "private" : true,
  "watchDate" : "2000-01-23",
  "$schema" : "$schema",
  "rating" : 2,
  "self" : "http://example.com/aeiou",
  "id" : 0,
  "title" : "title",
  "favorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

