(function() {
    'use strict';

    function CatalogCtrl($scope, catalog)
    {
        $scope.catalog = catalog;
    }

    angular.module('azbuka').controller('CatalogCtrl', ['$scope', 'catalog', CatalogCtrl]);
}());
