theGreenhouseApp = angular.module('theGreenhouseApp',[
  'templates',
  'ngRoute',
  'controllers',
])

theGreenhouseApp.config([ '$routeProvider',
  ($routeProvider)->
    $routeProvider
      .when('/',
        templateUrl: "thegreenhouse/index.html"
        controller: 'theGreenhouseController'
      )
])

controllers = angular.module('controllers',[])
controllers.controller("theGreenhouseController", [ '$scope','$http',
  ($scope,$http)->
])