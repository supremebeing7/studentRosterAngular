var studentRoster = angular.module('studentRoster', ['ngRoute']);

studentRoster.config(function ($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'StudentsCtrl',
        templateUrl: 'views/Students.html'
      });
});
