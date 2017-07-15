app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/rent/flat", {
        templateUrl: "view/rent/flat/index.html",
        controller: "rentFlatCtrl"
    });
}]);

app.controller('rentFlatCtrl', function ($scope) {

    // $scope.outputBrowsers;
    // $scope.webBrowsersGrouped = [
    //     {
    //         name: '<strong>Modern Web Browsers</strong>',
    //         msGroup: true
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32/opera.png" />',                         
    //         name: 'Opera',              
    //         maker: '(Opera Software)',        
    //         ticked: true
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32/internet_explorer.png" />',             
    //         name: 'Internet Explorer',  
    //         maker: '(Microsoft)',
    //         ticked: false   
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/humano2/32x32/apps/firefox-icon.png" />',         
    //         name: 'Firefox',            
    //         maker: '(Mozilla Foundation)',    
    //         ticked: true    
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32x32/safari_browser.png" />',             
    //         name: 'Safari',             
    //         maker: '(Apple)',                 
    //         ticked: false   
    //     },
    //     { 
    //         icon: '<img  src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/32/chrome.png" />',  
    //         name: 'Chrome',             
    //         maker: '(Google)',                
    //         ticked: true   
    //     },
    //     {
    //         msGroup: false
    //     },
    //     {
    //         name: '<strong>Classic Web Browsers</strong>',
    //         msGroup: true
    //     },
    //     { 
    //         icon: '<img  src="http://www.ucdmc.ucdavis.edu/apps/error/nojavascript/images/netscape_icon.jpg" />',      
    //         name: 'Netscape Navigator', 
    //         maker: '(Netscape Corporation)',  
    //         ticked: true    
    //     },
    //     { 
    //         icon: '<img  src="http://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Amaya_logo_65x50.png/48px-Amaya_logo_65x50.png" />',             
    //         name: 'Amaya',  
    //         maker: '(Inria & W3C)',             
    //         ticked: true   
    //     },
    //     {
    //         icon: '<img  src="http://upload.wikimedia.org/wikipedia/commons/8/8c/WorldWideWeb_Icon.png" />',
    //         name: 'WorldWideWeb Nexus',
    //         maker: '(Tim Berners-Lee)',
    //         ticked: false
    //     },
    //     {
    //         msGroup: false
    //     }
    // ];

    // $scope.metroStationOutput;

    $scope.showDetails = false;

    $scope.openDetails = function(){
        $scope.showDetails = true;
    }
    
    $scope.openDetails = function(){
        $scope.showDetails = true;
    }


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