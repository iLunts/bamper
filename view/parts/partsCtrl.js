app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/parts/", {
            templateUrl: "view/parts/index.html",
            controller: "partsCtrl"
        });
    }
]);

app.controller('rentCtrl', function($scope){

});