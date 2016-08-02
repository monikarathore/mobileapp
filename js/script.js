var app = angular.module('medsolisApp', ['ui.router']);

var body = document.getElementsByTagName('body')[0];
setTimeout(function() {
    body.setAttribute('ng-app', 'medsolisApp');
    angular.bootstrap(body, ['ng', 'medsolisApp']);
}, 1600); 

//Validation login

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/splash");
  $stateProvider
    .state('splash', {
      url: "/splash",
      templateUrl: "splash.html",
      controller: "LoginCheckController"
    })
    .state('main', {
      url: "/main",
      templateUrl: "main.html",
      //controller: "LoginCheckController"
    });
});

app.controller('LoginCheckController', ['$scope', '$location', LoginCheckController]);

function LoginCheckController($scope, $location) {
      $scope.users = [{
        UserName: 'monika',
        Password: 'monika'
      },{
        UserName: 'monika123',
        Password: 'monika@123'
      }];

     $scope.submitForm = function() {
        if ($scope.userForm.$valid) {
          alert('our form is amazing');
          $location.path("main");
        }
        
      };
}

//splash screen code
