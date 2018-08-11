angular.module('app')
.component('home', {
  controller: function(messagesService) {
    this.message = '';
    this.$onInit = function() {
      var scope = this;
      messagesService.getMessage(function(data) {
        console.log('Data received');
        console.log(data);
        scope.message = data.data;
      });
    };
    this.$onInit.bind(this);
  },
  templateUrl: '/templates/home.html'
});