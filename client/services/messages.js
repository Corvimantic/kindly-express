angular.module('app')
.service('messagesService', function($http) {
  this.getMessage = function(callback) {
    $http.get('/messages')
    .then(function(data) {
      callback(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  this.submitNew = function(submission, callback) {
    $http.post('/submit', submission, {headers: {'Content-Type': 'text/plain'}})
    .then(function(data) {
      callback(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  }
});