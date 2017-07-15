app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/sale/flat", {
        templateUrl: "view/sale/flat/index.html",
        controller: "saleFlatCtrl"
    });
}]);

app.controller('saleFlatCtrl', function ($scope) {

    $scope.showDetails = false;

    $scope.openDetails = function(){
        $scope.showDetails = true;
    }
    
    $scope.openDetails = function(){
        $scope.showDetails = true;
    }
    
    $scope.closeDetails = function(){
        $scope.showDetails = false;
    }

    $scope.apartments = [
        {
            url: '/content/img/sale/flat/1.jpg'
        },
        {
            url: '/content/img/sale/flat/2.jpg'
        },
        {
            url: '/content/img/sale/flat/3.jpg'
        },
        {
            url: '/content/img/sale/flat/4.jpg'
        },
        {
            url: '/content/img/sale/flat/5.jpg'
        },
        {
            url: '/content/img/sale/flat/6.jpg'
        },
        {
            url: '/content/img/sale/flat/7.jpg'
        },
        {
            url: '/content/img/sale/flat/8.jpg'
        },
        {
            url: '/content/img/sale/flat/9.jpg'
        },
        {
            url: '/content/img/sale/flat/10.jpg'
        }
    ];


    $scope.params = [{
            name: 'Цена',
            socr: 'Цена',
            check: true,
            sort: false
        },
        {
            name: 'Об / Раз',
            socr: 'Об/Раз',
            check: false,
            sort: false
        },
        {
            name: 'Улица',
            socr: 'Улица',
            check: false,
            sort: false
        },
        {
            name: 'Дом',
            socr: 'Дом',
            check: true,
            sort: false
        },
        {
            name: 'Корпус',
            socr: 'Кор',
            check: true,
            sort: false
        },
        {
            name: 'Этаж',
            socr: 'Этаж',
            check: true,
            sort: false
        },
        {
            name: 'Мебель',
            socr: 'Мебель',
            check: false,
            sort: false
        },
        {
            name: 'Холодильник',
            socr: 'Хол',
            check: true,
            sort: false
        },
        {
            name: 'С/м',
            socr: 'С/м',
            check: true,
            sort: false
        },
        {
            name: 'Телефон',
            socr: 'Тел',
            check: true,
            sort: false
        },
        {
            name: 'Телевизор',
            socr: 'ТВ',
            check: false,
            sort: false
        },
        {
            name: 'Предложения',
            socr: 'Пред.',
            check: false,
            sort: false
        },
        {
            name: 'Срок аренды',
            socr: 'Срок',
            check: true,
            sort: false
        },
        {
            name: 'Примечание',
            socr: 'Примечание',
            check: true,
            sort: false
        },
        {
            name: '-',
            socr: '-',
            check: true,
            sort: false
        },
        {
            name: '-',
            socr: '-',
            check: false,
            sort: false
        },
        {
            name: 'Заметки',
            socr: 'Змт',
            check: false,
            sort: false
        },
        {
            name: 'Ответственный',
            socr: 'Ответств',
            check: false,
            sort: false
        },
        {
            name: 'Телефоны',
            socr: 'Телефоны',
            check: true,
            sort: false
        },
        {
            name: 'Дата измененения',
            socr: 'Изменен',
            check: false,
            sort: false
        },
        {
            name: 'Дата создания',
            socr: 'Добавлен',
            check: false,
            sort: true
        },
        {
            name: 'Статус',
            socr: 'Статус',
            check: false,
            sort: false
        },
        {
            name: '-',
            socr: '-',
            check: false,
            sort: false
        },
        {
            name: '-',
            socr: '-',
            check: false,
            sort: false
        },
        {
            name: '-',
            socr: '-',
            check: false,
            sort: false
        },
        {
            name: 'Уникальный ID',
            socr: 'ID',
            check: false,
            sort: false
        }
    ];

    $scope.rooms = [
        {   
            check: false,
            price: '123',
            currecny: '$',
            street: 'Плеханова',
            house_number: '23',
            room_number: '2',
            home_block: '1',
            floor: '3',
            floor_max: '12',
            furniture: '+',
            refrigerator: true,
            s_m: '+',
            cell: true,
            tv: true,
            proposal: 'fgdf gdfgdf df',
            rent_time: '1 мес.',
            description: 'dsf sdf sdfsdfsdfsdf',
            note: '',
            assigner: '',
            phones: '',
            change: '',
            added: '',
            status: '',
            id: '1'
        },
        {
            check: true,
            price: '123',
            currecny: '$',
            street: 'ул. Плеханова',
            house_number: '23',
            room_number: '2',
            home_block: '1',
            floor: '3',
            floor_max: '12',
            furniture: '+',
            refrigerator: true,
            s_m: '+',
            cell: true,
            tv: true,
            proposal: 'fgdf gdfgdf df',
            rent_time: '1 мес.',
            description: 'dsf sdf sdfsdfsdfsdf',
            note: '',
            assigner: '',
            phones: '',
            change: '',
            added: '',
            status: '',
            id: '2'
        },
        {
            check: false,
            price: '123',
            currecny: '$',
            street: 'ул. Плеханова',
            house_number: '23',
            room_number: '2',
            home_block: '1',
            floor: '3',
            floor_max: '12',
            furniture: '+',
            refrigerator: true,
            s_m: '+',
            cell: true,
            tv: true,
            proposal: 'fgdf gdfgdf df',
            rent_time: '1 мес.',
            description: 'dsf sdf sdfsdfsdfsdf',
            note: '',
            assigner: '',
            phones: '',
            change: '',
            added: '',
            status: '',
            id: '3'
        },
    
    ];

});