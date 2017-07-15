app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/rent/", {
            templateUrl: "view/rent/index.html",
            controller: "rentCtrl"
        });
    }
]);

app.controller('rentCtrl', function($scope){

});