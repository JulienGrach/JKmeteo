app.controller('meteoAccueilCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.chercher = function () {

            $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=71ccfac7abcfa4eceae01a46379e4422',).then(function (response) {
                $scope.meteo = response.data;
            });
        }




    }]
);



