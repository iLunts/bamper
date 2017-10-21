app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/parts/new/add", {
            templateUrl: "view/parts/new/add/index.html",
            controller: "partsNewAddCtrl"
        });
    }
]);

app.controller('partsNewAddCtrl', function($scope, FileUploader){

    $scope.sale = 0;
    $scope.price = 0;
    $scope.showAdvacePhone = false;

    $scope.uploader = new FileUploader();

    $('.input').on('blur', function () {
        if ($(this).val().length === 0){
            $(this).closest('.form-group').removeClass('focused has-value').addClass('empty');
        }
        else{
            $(this).closest('.form-group').removeClass('focused empty').addClass('has-value');
        }
    }).on('focus', function () {
        $(this).closest('.form-group').removeClass('has-value empty').addClass('focused');
    });


});


