angular.module('app')
.component('submit', {
  controller: function() {
    this.submission = '';
    this.submitted = false;
    this.submit = function(message) {
      console.log(this.submission);
      this.submission = '';
      this.submitted = true;
    };
    this.submit.bind(this);
  },
  templateUrl: '/templates/submit.html'
});