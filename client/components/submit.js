angular.module('app')
.component('submit', {
  controller: function(messagesService) {
    this.submission = '';
    this.submitted = false;
    this.submit = function(message) {
      console.log(this.submission);
      var scope = this;
      messagesService.submitNew(this.submission, function(data) {
        console.log('message submitted');
        console.log(data.data);
        scope.submission = '';
        scope.submitted = true;
      });
    };
    this.submit.bind(this);
  },
  templateUrl: '/templates/submit.html'
});