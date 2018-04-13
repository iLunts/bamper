app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/statistic/", {
            templateUrl: "view/statistic/index.html",
            controller: "statisticCtrl"
        });
    }
]);

app.controller('statisticCtrl', function ($scope) {

    $scope.statisticArray = [
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Двигатель',
            count: 1,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes-Benz',
            part: 'Блок предохранителей',
            count: 3,
            date: new Date(1432731600 * 2000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Двигатель',
            count: 13,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Дверь передняя правая',
            count: 8,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Моторчик печки',
            count: 3,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Стеклоподъемник электрический передний',
            count: 78,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Автономный отопитель',
            count: 6,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Зеркало наружное левое',
            count: 2,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Щиток приборов (приборная панель) к ',
            count: 10,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Балка подвески передняя (подрамник)',
            count: 4,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Корпус масляного фильтра',
            count: 4,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Щеткодержатель (поводок стеклоочистителя, дворник)',
            count: 1,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Прицепное устройство (фаркоп)',
            count: 19,
            date: new Date(1432731600 * 1000)
        },
        {
            modal: 'Mercedes Sprinter, 2008 г.',
            part: 'Редуктор заднего моста',
            count: 190,
            date: new Date(1432731600 * 1000)
        },
    ];

    $scope.arrayCounts = [
        {
            date: '24 апреля', view: 20, phone: 12
        },
        {
            date: '23 апреля', view: 20, phone: 12
        },
        {
            date: '22 апреля', view: 20, phone: 12
        },
        {
            date: '21 апреля', view: 20, phone: 12
        },
    ];
    
    

});