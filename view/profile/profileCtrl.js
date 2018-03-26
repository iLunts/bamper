app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/profile", {
            templateUrl: "view/profile/index.html",
            controller: "profileCtrl"
        });
    }
]);

app.controller('profileCtrl', function($scope){

    

});