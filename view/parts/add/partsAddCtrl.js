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

});

// $(window).load(function () {
//     $(".form-group .input").val("");

//     $(".form-group .input").focusout(function () {
//         if ($(this).val() != "") {
//             $(this).addClass("isFull");
//         } else {
//             $(this).removeClass("isFull");
//         }
//     })
// });


(function () {
    var materialForm;

    materialForm = function () {
        return $('.input').focus(function () {
            return $(this).closest('.form-group').addClass('focused has-value');
        }).focusout(function () {
            return $(this).closest('.form-group').removeClass('focused');
        }).blur(function () {
            if (!this.value) {
                $(this).closest('.form-group').removeClass('has-value');
            }
            return $(this).closest('.form-group').removeClass('focused');
        });
    };

    $(function () {
        return materialForm();
    });

}).call(this);

