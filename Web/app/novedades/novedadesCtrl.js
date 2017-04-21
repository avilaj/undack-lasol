'use strict';

angular.module('Novedades')
    .controller('novedades.index', ['$scope', 'novedadesService',
        function ($scope, novedadesService) {
            $scope.setup = function()
            {
                console.log('Setup novedades');
                $scope.novedades = novedadesService.obtenerNovedades();
                $scope.novedadSeleccionada = novedadesService.obtenerNovedadDestacada();
            }

            $scope.selecionarNovedad = function(novedad)
            {
                $scope.novedadSeleccionada = novedad;
            }

            $scope.setup();
        }
    ]);