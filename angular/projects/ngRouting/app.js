angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/",
                {
                    //controller: 'myCtrl',
                    templateUrl: 'partials/list.html'
                })
            .when("/new",
                {
                    controller: 'newCtrl',
                    templateUrl: "partials/edit.html"
                })
            .when("/edit", {templateUrl: "/partials/edit.html"})
    });

var myCtrl = function ($scope) {
    $scope.persons = [
        {name: 'Frank', title: "Captain"},
        {name: 'David', title: "Master"},
        {name: 'Tibo', title: "CIO"}
    ];
};

var newCtrl = function ($scope, $location) {
    $scope.newPerson =  {name: '', title: ''};

    $scope.addPerson = function() {
        $scope.persons.push($scope.newPerson);
        $location.path('/');
    }
};