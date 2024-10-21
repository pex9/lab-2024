'use strict';
const db = require('../db');
const User = require('../components/user');
const bcrypt = require('bcrypt');
/**
 * Get all users
 * Get all users.
 *
 * returns List
 **/
exports.getUsers = function() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT id, name, email FROM users";
    db.all(sql, [], (err, rows) => {
        if (err) {
            reject(err);
        } else {
            if (rows.length === 0)
                 resolve(undefined);
            else {
                let users = rows.map((row) => createUser(row));
                resolve(users);
            }
        }
    });
  });
}

/**
 * Authenticate a user
 * Authenticate a user.
 *
 * body User Representation of the user to be authenticated
 * returns User
 **/
exports.authenticateUser = function(body,type) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a user
 * Get the user with the specified identifier.
 *
 * id Integer Unique identifier of the user to retrieve
 * returns User
 **/
exports.getUser = function(id) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT id, name, email FROM users WHERE id = ?";
    db.get(sql, [id], (err, row) => {
        if (err) {
            reject(err);
        } else {
            if (row === undefined)
                resolve(undefined);
            else {
                let user = createUser(row);
                resolve(user);
            }
        }
    });
  });
}
exports.getUserByEmail = function (email) {
  return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM users WHERE email = ?";
      db.all(sql, [email], (err, rows) => {
          if (err) 
              reject(err);
          else if (rows.length === 0)
              resolve(undefined);
          else{
              const user = createUser(rows[0]);
              resolve(user);
          }
      });
  });
};


/**
 * Utility functions
 */

const createUser = function (row) {
  const id = row.id;
  const name = row.name;
  const email = row.email;
  const hash = row.hash;
  return new User(id, name, email, hash);
}
exports.checkPassword = function(user, password){
  let hash = bcrypt.hashSync(password, 10);
  return bcrypt.compareSync(password, user.hash);
}
