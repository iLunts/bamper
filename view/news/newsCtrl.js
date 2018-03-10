app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/news/details", {
            templateUrl: "view/news/index.html",
            controller: "newsCtrl"
        });
    }
]);

app.controller('newsCtrl', function($scope){

    

});