app.controller('meteoAccueilCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.i = 0;

        $scope.chercher = function () {

            $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+$scope.cityUser+'&units=metric&appid=71ccfac7abcfa4eceae01a46379e4422').then(function (response) {
                $scope.meteo = response.data;
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



    }]
);



