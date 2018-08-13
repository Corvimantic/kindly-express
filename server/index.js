var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database/index');

var app = express();
var textParser = bodyParser.text();

var tempStorage = [];

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/submit', function (req, res) {
  res.redirect('/#!submit');
})

app.post('/submit', textParser, function (req, res) {
  // TODO
  console.log(req.body);
  database.saveNewMessage(req.body, function(err, results) {
    res.send(true);
  });
})

app.get('/messages', function (req, res) {
  database.selectRandomMessage(function(err, results) {
    res.send(results);
  });
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

