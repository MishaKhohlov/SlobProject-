;(function(){
    'use strict';

    angular
        .module('ngData', ['firebase'])
        .factory('Data', dataFact);

    function dataFact($firebaseAuth, $firebaseObject, $q, $log, $rootScope, firebase_url){
        var dataArr =  [
            {
                'type' : 'квартира', // дом, участки, нежилая недвижимость
                'number_obj' : 123,
                'name_obj' : 'Квартира 2км',
                'photo' : ['','','','',''],
                'isolation_house' : 'дача', // часть дома, целый дом
                'isolation_flat' : true,
                'room' : 'laxury', // 1,2,3,4 many, laxury
                'price': 2100,
                'city' : 'true', // kharkiv prigorod
                'district' : 'Алеексеевка',
                'space' : 43,
                'phone_agent' : [675729181,2121232,37465349],
                'name_agent' : 'Karl',
                'adress' : 'street artilliryiska house 2/a',
                'discriptions' : 'This is descriptions'
            },
            {
                'type' : 'квартира', // дом, участки, нежилая недвижимость
                'number_obj' : 223,
                'name_obj' : 'Квартира 2км',
                'photo' : ['','','','',''],
                'isolation_house' : 'дача', // часть дома, целый дом
                'isolation_flat' : true,
                'room' : 'laxury', // 1,2,3,4 many, laxury
                'price': 2100,
                'city' : 'true', // kharkiv prigorod
                'district' : 'Алеексеевка',
                'space' : 43,
                'phone_agent' : [675729181,2121232,37465349],
                'name_agent' : 'Karl',
                'adress' : 'street artilliryiska house 2/a',
                'discriptions' : 'This is descriptions'
            },
            {
                'type' : 'квартира', // дом, участки, нежилая недвижимость
                'number_obj' : 332,
                'name_obj' : 'Квартира 2км',
                'photo' : ['','','','',''],
                'isolation_house' : 'дача', // часть дома, целый дом
                'isolation_flat' : true,
                'room' : 'laxury', // 1,2,3,4 many, laxury
                'price': 2100,
                'city' : 'true', // kharkiv prigorod
                'district' : 'Алеексеевка',
                'space' : 43,
                'phone_agent' : [675729181,2121232,37465349],
                'name_agent' : 'Karl',
                'adress' : 'street artilliryiska house 2/a',
                'discriptions' : 'This is descriptions'
            }
        ];
        var publickDataObj = {
            getData: function(){
                return dataArr;
            },
            getDataItem: function(id) {
                return dataArr[id];
            },
            auth: function() {
                var dfd = $q.defer()

                setTimeout(function() {
                    dfd.resolve({
                        name: 'Mittens Cat'
                    })
                }, 2000)

                return dfd.promise
            }
    };

        return publickDataObj;
    }
})();