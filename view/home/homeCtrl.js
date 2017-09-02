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

    $scope.news = [
        {
            type: 'обновление', 
            title: 'Показа объявлений только одного продавца', 
            img: 'https://cdn.dribbble.com/users/263446/screenshots/3020139/attachments/632274/day007-settings.jpg', 
            date: '11 июля 2017', 
            text: 'Допустим у вас есть покупатель, который уже выбрал у вас запчасть и хотел бы посмотреть, что у вас есть еще, возможно его заинтересует дополнительно какая-то деталь.'
        },
        {
            type: 'обновление', 
            title: 'Режим отпуска на сайте', 
            img: 'https://cdn.dribbble.com/users/331737/screenshots/3737472/design.png', 
            date: '16 июля 2017', 
            text: 'В преддверии массовых отпусков мы добавили на Bamper.by новую "фишку", которая, надеемся, упростит работу с нашим сайтом.'
        },
        {
            type: 'обновление', 
            title: 'Теперь у вас есть Viber', 
            img: 'https://cdn.dribbble.com/users/455839/screenshots/1892171/android.png', 
            date: '28 авгеста 2017', 
            text: 'Чтобы в ваших контактных данных отображалось, что на данном телефоне у вас есть Viber'
        },
    ];

});