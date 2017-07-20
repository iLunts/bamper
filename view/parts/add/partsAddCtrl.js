app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/parts/add", {
            templateUrl: "view/parts/add/index.html",
            controller: "partsAddCtrl"
        });
    }
]);

app.controller('partsAddCtrl', function($scope){

    $scope.sale = 0;
    $scope.price = 0;
    $scope.showAdvacePhone = false;

});