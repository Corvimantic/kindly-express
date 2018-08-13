var mysql = require('mysql');
var password = require('./env/config.js');
var Promise = require('bluebird');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : password,
  database : 'kindly'
});

var selectRandomMessage = function(callback) {
  return new Promise(function(resolve, reject) {
    connection.query('SELECT COUNT(*) FROM messages', function(err, results, fields) {
      if (err) {
        reject(err);
      } else {
        var id = getRandomInt(results);
        resolve(id);
      }
    });
  })
  .then(function(id) {
    connection.query(`SELECT * FROM messages WHERE id = ${id}`, function(err, results, fields) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  });
};

var saveNewMessage = function(message, callback) {
  connection.query(`INSERT INTO messages (message) VALUE ("${message}")`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

function getRandomInt(max) {
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - 1)) + 1;
}

module.exports.selectRandomMessage = selectRandomMessage;
module.exports.saveNewMessage = saveNewMessage;
