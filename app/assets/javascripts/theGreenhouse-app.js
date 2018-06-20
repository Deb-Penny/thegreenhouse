

    var theGreenhouseApp = angular.module('theGreenhouseApp', ['datatables','datatables.bootstrap']);
    theGreenhouseApp.controller('theGreenhouseController', ['$scope', '$window' ,'$filter','$http', 'DTOptionsBuilder',
        function theGreenhouseController(
        $scope, $window, $filter, $http, DTOptionsBuilder) 
        {
            $scope.flowersTableDisplay = document.getElementById("available_flowers_table");
            $scope.available_flowers_inv=[];
            $scope.availablePerennials=[];

            $http({
                method: 'GET',
                url: 'thegreenhouse/available_flowers_inv.json'
            }).then(function (response) {
                $scope.available_flowers_inv=response.data.flowers;
            }); 

            $http({
                method: 'GET',
                url: 'thegreenhouse/perennials.json'
            }).then(function (response) {
                $scope.availablePerennials=response.data.flowers;
            }); 

            $scope.available = [];
            $scope.selected = [];

            $scope.moveItem = function(items, from, to) {
                angular.forEach(items, function(item) {
                  var idx = from.indexOf(item);
                  from.splice(idx, 1);
                  to.push(item);
                });

                // clear selection
                $scope.available = "";
                $scope.selected = "";
            };

            $scope.selectedPerennials = [];  
        }
    ]);

    







