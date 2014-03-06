function trackController($scope, $http) {
    $http.get('http://localhost:8080/RESTfulWS/rest/json/metallica/getAll').
        success(function(data) {
            $scope.tracks = data;
        });
}