app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/parts/used", {
            templateUrl: "view/parts/used/index.html",
            controller: "partsUsedCtrl"
        });
    }
]);

app.controller('partsUsedCtrl', function($scope){

});