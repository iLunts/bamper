app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/rent/office", {
            templateUrl: "view/rent/office/index.html",
            controller: "rentOfficeCtrl"
        });
    }
]);

app.controller('rentOfficeCtrl', function($scope){

});