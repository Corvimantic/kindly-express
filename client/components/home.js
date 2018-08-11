angular.module('app')
.component('home', {
  controller: function() {
    this.message = 'hi';
    this.$onInit = function() {
      console.log('hello');
      // GET /messages
      // set message to result
    };
    this.$onInit.bind(this);
  },
  templateUrl: '/templates/home.html'
});