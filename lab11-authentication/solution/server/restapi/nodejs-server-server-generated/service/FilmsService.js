'use strict';


/**
 * Create a new film
 * A new film is created by the authenticated user.
 *
 * body Film Representation of the film to be created
 * returns Film
 **/
exports.createFilm = function(body) {
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

