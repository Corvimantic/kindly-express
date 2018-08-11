var express = require('express');
var bodyParser = require('body-parser');
//var items = require('../database');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/submit', function (req, res) {
  res.redirect('/#!submit');
})

app.post('/submit', function (req, res) {
  // TODO
})

app.get('/messages', function (req, res) {
  // TODO
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

