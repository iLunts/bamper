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


    $('.input').on('blur', function () {
        if ($(this).val().length === 0){
            $(this).parent('.form-group').removeClass('focused has-value').addClass('empty');
        }
        else{
            $(this).parent('.form-group').removeClass('focused empty').addClass('has-value');
        }
    }).on('focus', function () {
        $(this).parent('.form-group').removeClass('has-value empty').addClass('focused');
    });


});


