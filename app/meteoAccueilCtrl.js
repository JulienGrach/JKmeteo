app.controller('meteoAccueilCtrl', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {



    function readCityCookies(){
        var cookieValue = $cookies.get('cityRemember');

        if(cookieValue != undefined){
            var uniqValue = cookieValue.split(',');
            var i=0;
            var result = 0;

            for(element in uniqValue){
                i++;
            }

            result = {number : i, cities : uniqValue};
        }else{
            result = false;
        }

        return result
    }


    function writeCityCookies(cityObject, value){

        if(!cityObject){
            var cityObject = {number : 1, cities : value};
        }else{

            if(cityObject.number <= 5){
                cityObject.cities += ","+value;
                cityObject.number ++;
            }else{
                cityObject.cities.splice(0,1);
                cityObject.cities += ","+value;
            }

        }

        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);

        $cookies.put('cityRemember',  cityObject.cities, {expires : expireDate});
    }





    $scope.i = 0;
    $scope.cookies = readCityCookies().cities;






    $scope.chercher = function (city) {

        $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=71ccfac7abcfa4eceae01a46379e4422').then(function (response) {
            $scope.meteo = response.data;
            writeCityCookies(readCityCookies(), response.data.city.name);
            $scope.cookies = readCityCookies().cities;
        });
    };





    $scope.today = function () {
        $scope.i = 0;
    };

    $scope.tomorrow = function () {
        $scope.i = 8;
    };

    $scope.afterTomorrow = function () {
        $scope.i = 16;
    };


}]);



