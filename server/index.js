var express = require('express');
var bodyParser = require('body-parser');
//var items = require('../database');

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
  tempStorage.push(req.body);
  res.send(true);
})

app.get('/messages', function (req, res) {
  // TODO
  res.send(tempStorage[0]);
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

