app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/settings", {
        templateUrl: "view/settings/index.html",
        controller: "settingsCtrl"
    });
}]);

app.controller('settingsCtrl', function ($scope) {

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

    $scope.brands = [{
            id: "1",
            brand: "AC"
        },
        {
            id: "2",
            brand: "Acura"
        },
        {
            id: "3",
            brand: "Alfa Romeo"
        },
        {
            id: "4",
            brand: "Alpine"
        },
        {
            id: "5",
            brand: "AM General"
        },
        {
            id: "6",
            brand: "Ariel"
        },
        {
            id: "7",
            brand: "Aro"
        },
        {
            id: "8",
            brand: "Asia"
        },
        {
            id: "9",
            brand: "Aston Martin"
        },
        {
            id: "10",
            brand: "Audi"
        },
        {
            id: "11",
            brand: "Austin"
        },
        {
            id: "12",
            brand: "Autobianchi"
        },
        {
            id: "13",
            brand: "Baltijas Dzips"
        },
        {
            id: "14",
            brand: "Beijing"
        },
        {
            id: "15",
            brand: "Bentley"
        },
        {
            id: "16",
            brand: "Bertone"
        },
        {
            id: "17",
            brand: "Bitter"
        },
        {
            id: "18",
            brand: "BMW"
        },
        {
            id: "19",
            brand: "BMW Alpina"
        },
        {
            id: "20",
            brand: "Brabus"
        },
        {
            id: "21",
            brand: "Brilliance"
        },
        {
            id: "22",
            brand: "Bristol"
        },
        {
            id: "23",
            brand: "Bufori"
        },
        {
            id: "24",
            brand: "Bugatti"
        },
        {
            id: "25",
            brand: "Buick"
        },
        {
            id: "26",
            brand: "BYD"
        },
        {
            id: "27",
            brand: "Byvin"
        },
        {
            id: "28",
            brand: "Cadillac"
        },
        {
            id: "29",
            brand: "Callaway"
        },
        {
            id: "30",
            brand: "Carbodies"
        },
        {
            id: "31",
            brand: "Caterham"
        },
        {
            id: "32",
            brand: "Changan"
        },
        {
            id: "33",
            brand: "ChangFeng"
        },
        {
            id: "34",
            brand: "Chery"
        },
        {
            id: "35",
            brand: "Chevrolet"
        },
        {
            id: "36",
            brand: "Chrysler"
        },
        {
            id: "37",
            brand: "Citroen"
        },
        {
            id: "38",
            brand: "Cizeta"
        },
        {
            id: "39",
            brand: "Coggiola"
        },
        {
            id: "40",
            brand: "Dacia"
        },
        {
            id: "41",
            brand: "Dadi"
        },
        {
            id: "42",
            brand: "Daewoo"
        },
        {
            id: "43",
            brand: "DAF"
        },
        {
            id: "44",
            brand: "Daihatsu"
        },
        {
            id: "45",
            brand: "Daimler"
        },
        {
            id: "46",
            brand: "Dallas"
        },
        {
            id: "47",
            brand: "Datsun"
        },
        {
            id: "48",
            brand: "De Tomaso"
        },
        {
            id: "49",
            brand: "DeLorean"
        },
        {
            id: "50",
            brand: "Derways"
        },
        {
            id: "51",
            brand: "Dodge"
        },
        {
            id: "52",
            brand: "DongFeng"
        },
        {
            id: "53",
            brand: "Doninvest"
        },
        {
            id: "54",
            brand: "Donkervoort"
        },
        {
            id: "55",
            brand: "E-Car"
        },
        {
            id: "56",
            brand: "Eagle"
        },
        {
            id: "57",
            brand: "Eagle Cars"
        },
        {
            id: "58",
            brand: "Ecomotors"
        },
        {
            id: "59",
            brand: "FAW"
        },
        {
            id: "60",
            brand: "Ferrari"
        },
        {
            id: "61",
            brand: "Fiat"
        },
        {
            id: "62",
            brand: "Fisker"
        },
        {
            id: "63",
            brand: "Ford"
        },
        {
            id: "64",
            brand: "Foton"
        },
        {
            id: "65",
            brand: "FSO"
        },
        {
            id: "66",
            brand: "Fuqi"
        },
        {
            id: "67",
            brand: "Geely"
        },
        {
            id: "68",
            brand: "Geo"
        },
        {
            id: "69",
            brand: "GMC"
        },
        {
            id: "70",
            brand: "Gonow"
        },
        {
            id: "71",
            brand: "Great Wall"
        },
        {
            id: "72",
            brand: "Hafei"
        },
        {
            id: "73",
            brand: "Haima"
        },
        {
            id: "74",
            brand: "Hindustan"
        },
        {
            id: "75",
            brand: "Holden"
        },
        {
            id: "76",
            brand: "Honda"
        },
        {
            id: "77",
            brand: "HuangHai"
        },
        {
            id: "78",
            brand: "Hummer"
        },
        {
            id: "79",
            brand: "Hyundai"
        },
        {
            id: "80",
            brand: "Infiniti"
        },
        {
            id: "81",
            brand: "Innocenti"
        },
        {
            id: "82",
            brand: "Invicta"
        },
        {
            id: "83",
            brand: "Iran Khodro"
        },
        {
            id: "84",
            brand: "Isdera"
        },
        {
            id: "85",
            brand: "Isuzu"
        },
        {
            id: "86",
            brand: "IVECO"
        },
        {
            id: "87",
            brand: "JAC"
        },
        {
            id: "88",
            brand: "Jaguar"
        },
        {
            id: "89",
            brand: "Jeep"
        },
        {
            id: "90",
            brand: "Jensen"
        },
        {
            id: "91",
            brand: "JMC"
        },
        {
            id: "92",
            brand: "Kia"
        },
        {
            id: "93",
            brand: "Koenigsegg"
        },
        {
            id: "94",
            brand: "KTM"
        },
        {
            id: "95",
            brand: "Lamborghini"
        },
        {
            id: "96",
            brand: "Lancia"
        },
        {
            id: "97",
            brand: "Land Rover"
        },
        {
            id: "98",
            brand: "Landwind"
        },
        {
            id: "99",
            brand: "Lexus"
        },
        {
            id: "100",
            brand: "Liebao Motor"
        },
        {
            id: "101",
            brand: "Lifan"
        },
        {
            id: "102",
            brand: "Lincoln"
        },
        {
            id: "103",
            brand: "Lotus"
        },
        {
            id: "104",
            brand: "LTI"
        },
        {
            id: "105",
            brand: "Luxgen"
        },
        {
            id: "106",
            brand: "Mahindra"
        },
        {
            id: "107",
            brand: "Marcos"
        },
        {
            id: "108",
            brand: "Marlin"
        },
        {
            id: "109",
            brand: "Marussia"
        },
        {
            id: "110",
            brand: "Maruti"
        },
        {
            id: "111",
            brand: "Maserati"
        },
        {
            id: "112",
            brand: "Maybach"
        },
        {
            id: "113",
            brand: "Mazda"
        },
        {
            id: "114",
            brand: "McLaren"
        },
        {
            id: "115",
            brand: "Mega"
        },
        {
            id: "116",
            brand: "Mercedes-Benz"
        },
        {
            id: "117",
            brand: "Mercury"
        },
        {
            id: "118",
            brand: "Metrocab"
        },
        {
            id: "119",
            brand: "MG"
        },
        {
            id: "120",
            brand: "Microcar"
        },
        {
            id: "121",
            brand: "Minelli"
        },
        {
            id: "122",
            brand: "Mini"
        },
        {
            id: "123",
            brand: "Mitsubishi"
        },
        {
            id: "124",
            brand: "Mitsuoka"
        },
        {
            id: "125",
            brand: "Morgan"
        },
        {
            id: "126",
            brand: "Morris"
        },
        {
            id: "127",
            brand: "Nissan"
        },
        {
            id: "128",
            brand: "Noble"
        },
        {
            id: "129",
            brand: "Oldsmobile"
        },
        {
            id: "130",
            brand: "Opel"
        },
        {
            id: "131",
            brand: "Osca"
        },
        {
            id: "132",
            brand: "Pagani"
        },
        {
            id: "133",
            brand: "Panoz"
        },
        {
            id: "134",
            brand: "Perodua"
        },
        {
            id: "135",
            brand: "Peugeot"
        },
        {
            id: "136",
            brand: "Piaggio"
        },
        {
            id: "137",
            brand: "Plymouth"
        },
        {
            id: "138",
            brand: "Pontiac"
        },
        {
            id: "139",
            brand: "Porsche"
        },
        {
            id: "140",
            brand: "Premier"
        },
        {
            id: "141",
            brand: "Proton"
        },
        {
            id: "142",
            brand: "PUCH"
        },
        {
            id: "143",
            brand: "Puma"
        },
        {
            id: "144",
            brand: "Qoros"
        },
        {
            id: "145",
            brand: "Qvale"
        },
        {
            id: "146",
            brand: "Reliant"
        },
        {
            id: "147",
            brand: "Renault"
        },
        {
            id: "148",
            brand: "Renault Samsung"
        },
        {
            id: "149",
            brand: "Rolls-Royce"
        }, {
            id: "150",
            brand: "Ronart"
        },
        {
            id: "151",
            brand: "Rover"
        },
        {
            id: "152",
            brand: "Saab"
        },
        {
            id: "153",
            brand: "Saleen"
        },
        {
            id: "154",
            brand: "Santana"
        },
        {
            id: "155",
            brand: "Saturn"
        },
        {
            id: "156",
            brand: "Scion"
        },
        {
            id: "157",
            brand: "SEAT"
        },
        {
            id: "158",
            brand: "ShuangHuan"
        },
        {
            id: "159",
            brand: "Skoda"
        },
        {
            id: "160",
            brand: "Smart"
        },
        {
            id: "161",
            brand: "Soueast"
        },
        {
            id: "162",
            brand: "Spectre"
        },
        {
            id: "163",
            brand: "Spyker"
        },
        {
            id: "165",
            brand: "Ssang Yong"
        }, {
            id: "166",
            brand: "Subaru"
        },
        {
            id: "167",
            brand: "Suzuki"
        },
        {
            id: "168",
            brand: "Talbot"
        },
        {
            id: "169",
            brand: "TATA"
        },
        {
            id: "170",
            brand: "Tatra"
        },
        {
            id: "171",
            brand: "Tazzari"
        },
        {
            id: "172",
            brand: "Tesla"
        },
        {
            id: "173",
            brand: "Tianma"
        },
        {
            id: "174",
            brand: "Tianye"
        },
        {
            id: "175",
            brand: "Tofas"
        },
        {
            id: "176",
            brand: "Toyota"
        },
        {
            id: "177",
            brand: "Trabant"
        },
        {
            id: "178",
            brand: "Tramontana"
        },
        {
            id: "179",
            brand: "Triumph"
        },
        {
            id: "180",
            brand: "TVR"
        },
        {
            id: "181",
            brand: "Vauxhall"
        },
        {
            id: "182",
            brand: "Vector"
        },
        {
            id: "183",
            brand: "Venturi"
        },
        {
            id: "184",
            brand: "Volkswagen"
        },
        {
            id: "185",
            brand: "Volvo"
        },
        {
            id: "186",
            brand: "Vortex"
        },
        {
            id: "187",
            brand: "Wartburg"
        },
        {
            id: "188",
            brand: "Westfield"
        },
        {
            id: "189",
            brand: "Wiesmann"
        },
        {
            id: "190",
            brand: "Xin Kai"
        }, {
            id: "191",
            brand: "Zastava"
        },
        {
            id: "192",
            brand: "Zotye"
        },
        {
            id: "193",
            brand: "ZX"
        },
        {
            id: "211",
            brand: "Ё-мобиль"
        }, {
            id: "212",
            brand: "Автокам"
        },
        {
            id: "213",
            brand: "Астро"
        },
        {
            id: "214",
            brand: "Бронто"
        },
        {
            id: "215",
            brand: "ВАЗ"
        },
        {
            id: "216",
            brand: "ГАЗ"
        },
        {
            id: "217",
            brand: "ЗАЗ"
        },
        {
            id: "218",
            brand: "ЗИЛ"
        },
        {
            id: "219",
            brand: "ИЖ"
        },
        {
            id: "220",
            brand: "КамАЗ"
        },
        {
            id: "221",
            brand: "Канонир"
        },
        {
            id: "222",
            brand: "ЛУАЗ"
        },
        {
            id: "223",
            brand: "Москвич"
        },
        {
            id: "224",
            brand: "СМЗ"
        },
        {
            id: "225",
            brand: "СеАЗ"
        },
        {
            id: "226",
            brand: "ТагАЗ"
        },
        {
            id: "227",
            brand: "УАЗ"
        },
        {
            id: "280",
            brand: "Ultima"
        },
        {
            id: "282",
            brand: "Hawtai"
        },
        {
            id: "284",
            brand: "Renaissance"
        },
    ]

});