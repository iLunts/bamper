app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/import/", {
            templateUrl: "view/import/index.html",
            controller: "importCtrl"
        });
    }
]);

app.controller('importCtrl', function($scope){

    $scope.importArray = [
        {image: ''},
        {image: ''},
        {image: ''},
        {image: ''},
        {image: ''},
        {image: ''},
        {image: ''},
        {image: ''},
        {image: ''},
        {image: ''},
    ];

});