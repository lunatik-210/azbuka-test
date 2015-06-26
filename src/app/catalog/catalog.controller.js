(function() {
    'use strict';

    function CatalogCtrl($scope, catalog, Storage)
    {
        $scope.catalog = catalog;

        $scope.Storage = Storage;
    }

    angular.module('azbuka').controller('CatalogCtrl', ['$scope', 'catalog', 'Storage', CatalogCtrl]);
}());
