app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "view/home/index.html",
            controller: "homeCtrl"
        });
    }
]);

app.controller('homeCtrl', function($scope){

    // $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
    $scope.colors = ['#8bc34a', '#03a9f4', '#ff8e72'];

    $scope.labels1 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    $scope.data1 = [
        [65, 59, 80, 81, 56, 55, 40, 20],
        [28, 48, 40, 19, 86, 27, 90, 20]
    ];
    $scope.statistic = [
        {
            label: 'Просмотры ',
            borderWidth: 2,
            type: 'line'
        },
        {
            label: 'Клики ',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            type: 'line'
        }
    ];

});