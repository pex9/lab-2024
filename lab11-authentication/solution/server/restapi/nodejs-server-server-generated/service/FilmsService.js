"use strict";
const db = require('../db');
const Film = require('../components/film');
/**
 * Create a new film
 * A new film is created by the authenticated user.
 *
 * body Film Representation of the film to be created
 * returns Film
 **/
exports.createF = function (film, owner) {
  return new Promise(function (resolve, reject) {
    const sql = "INSERT INTO films (title, owner, private, watchDate, rating, favorite) VALUES (?, ?, ?, ?, ?, ?)";
    db.run(sql, [film.title, owner, film.private, film.watchDate, film.rating, film.favorite], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ fid: this.lastID });
      }
    });
  });
};
exports.getPublicFilms = function () {
  return new Promise(function (resolve, reject) {
    var query = "SELECT * FROM films WHERE private = 0";
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        if (rows.length === 0) resolve(undefined);
        else {
          let films = rows.map((row) => createFilm(row));
          resolve(films);
        }
      }
    });
  });
};
exports.getPrivateFilms = function() {
  return new Promise(function(resolve, reject) {
    var query = "SELECT * FROM films WHERE private = 1";
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        if (rows.length === 0) resolve(undefined);
        else {
          let films = rows.map((row) => createFilm(row));
          resolve(films);
        }
      }
    });
  });
}


/**
 * Utility functions
 */
const getPagination = function(req) {
  var pageNo = parseInt(req.query.pageNo);
  var size = parseInt(constants.OFFSET);
  var limits = [];
  if (req.query.pageNo == null) {
      pageNo = 1;
  }
  limits.push(size * (pageNo - 1));
  limits.push(size);
  return limits;
}

const createFilm = function(row) {
  var privateFilm = (row.private === 1) ? true : false;
  var favoriteFilm;
  if(row.favorite == null) favoriteFilm = undefined;
  else favoriteFilm = (row.favorite === 1) ? true : false;
  return new Film(row.fid, row.title, row.owner, privateFilm, row.watchDate, row.rating, favoriteFilm);
}