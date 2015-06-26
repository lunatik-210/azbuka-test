(function() {
    'use strict';

    var azbukaModule = angular.module('azbuka', ['ngAnimate', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial']);

    var catalogState =
    {
        url: '/catalog',
        templateUrl: 'app/catalog/catalog.html',
        controller: 'CatalogCtrl',
        resolve: {
            catalog: [
                'Catalog',
                function(Catalog)
                {
                    return Catalog.query();
                }
            ]
        }
    };

    var bookState =
    {
        url: '/catalog/:book_id',
        templateUrl: 'app/catalog/book/book.html',
        controller: 'BookCtrl',
        resolve: {
            book: [
                'Catalog',
                '$stateParams',
                function(Catalog, $stateParams)
                {
                    return Catalog.get({id: $stateParams.book_id});
                }
            ],
            bundles: [
                'BookBundles',
                '$stateParams',
                function(BookBundles, $stateParams)
                {
                    return BookBundles.query({book_id: $stateParams.book_id});
                }
            ]
        }
    };

    function azbukaConfig($stateProvider, $urlRouterProvider) 
    {
        $stateProvider.state('catalog', catalogState);
        $stateProvider.state('book', bookState);

        $urlRouterProvider.otherwise('/catalog');
    }

    azbukaModule.config(['$stateProvider', '$urlRouterProvider', azbukaConfig]);

    azbukaModule.constant('dsAPI',      'https://ds.aggregion.com/api');
    azbukaModule.constant('storageAPI', 'https://storage.aggregion.com/api');
}());
