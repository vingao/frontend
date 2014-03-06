var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'SimpleController',
                templateUrl: 'Partials/View1.html'
            })
        .when('/view2',
            {
                controller: 'SimpleController',
                templateUrl: 'Partials/View2.html'
            })
        .otherwise(
            {
                redirectTo: '/'
            });
});

function SimpleController($scope) {
    $scope.customers = [
        {name: 'Al Goe', city: 'Boston'},
        {name: 'John Smith', city: 'Boston'},
        {name: 'John Doe', city: 'New York'},
        {name: 'Frank Smith', city: 'London'}
    ];

    $scope.addCustomer = function() {
        $scope.customers.push(
            {name: $scope.newCustomer.name, city: $scope.newCustomer.city}
        );
    }
}
