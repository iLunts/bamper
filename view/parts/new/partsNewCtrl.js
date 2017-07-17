app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/parts/new", {
        templateUrl: "view/parts/new/index.html",
        controller: "partsNewCtrl"
    });
}]);

app.controller('partsNewCtrl', function ($scope) {

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
            name: 'Статус',
            socr: 'Статус',
            check: true,
            sort: false
        },
        {
            name: 'Марка',
            socr: 'Марка',
            check: false,
            sort: false
        },
        {
            name: 'Модель',
            socr: 'Модель',
            check: false,
            sort: false
        },
        {
            name: 'Год выпуска',
            socr: 'г.в.',
            check: true,
            sort: false
        },
        {
            name: 'Описание',
            socr: 'Описание',
            check: true,
            sort: false
        },
        {
            name: 'Артикул',
            socr: 'Арт.',
            check: true,
            sort: false
        },
        {
            name: 'Оригинальный номер',
            socr: 'Ориг. номер',
            check: false,
            sort: false
        },
        {
            name: 'Складская информация',
            socr: 'Склад.инфо',
            check: true,
            sort: false
        },
        {
            name: 'Цена',
            socr: 'Цена',
            check: true,
            sort: false
        },
        {
            name: 'Дата добавления',
            socr: 'Дата',
            check: true,
            sort: false
        },
        {
            name: 'Просмотрено',
            socr: 'Просм.',
            check: false,
            sort: false
        },
        {
            name: 'Действия',
            socr: 'Действ.',
            check: false,
            sort: false
        }
    ];

    $scope.parts = [
        {   
            check: false,
            status: true,
            brand: 'Mercedes-Benz',
            model: 'A 170',
            date_build: 2003,
            description: 'Очень классная запцацка',
            article: '1234',
            serial_number: 'WDBMD123SDFA233',
            garage_info: '-',
            price: 125,
            date: '21.10.2017',
            view: 10,
            action: '',
        },
        {   
            check: false,
            status: true,
            brand: 'Mercedes-Benz',
            model: 'A 170',
            date_build: 2003,
            description: 'Очень классная запцацка',
            article: '1234',
            serial_number: 'WDBMD123SDFA233',
            garage_info: '-',
            price: 125,
            date: '21.10.2017',
            view: 10,
            action: '',
        },
        {   
            check: false,
            status: true,
            brand: 'Mercedes-Benz',
            model: 'A 170',
            date_build: 2003,
            description: 'Очень классная запцацка',
            article: '1234',
            serial_number: 'WDBMD123SDFA233',
            garage_info: '-',
            price: 125,
            date: '21.10.2017',
            view: 10,
            action: '',
        }
    ];

});