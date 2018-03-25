app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/export/", {
            templateUrl: "view/export/index.html",
            controller: "exportCtrl"
        });
    }
]);

app.controller('exportCtrl', function($scope){



});