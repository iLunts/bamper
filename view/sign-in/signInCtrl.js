app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/sign-in/", {
            templateUrl: "view/sign-in/index.html",
            controller: "signInCtrl"
        });
    }
]);

app.controller('signInCtrl', function($scope){

    $('.input').on('blur', function () {
        if ($(this).val().length === 0) {
            $(this).closest('.form-group').removeClass('focused has-value').addClass('empty');
        }
        else {
            $(this).closest('.form-group').removeClass('focused empty').addClass('has-value');
        }
    }).on('focus', function () {
        $(this).closest('.form-group').removeClass('has-value empty').addClass('focused');
    });

});