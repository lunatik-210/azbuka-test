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

    var errorState = 
    {
        templateUrl: 'app/error/error.html',
        controller: 'ErrorCtrl'
    };

    function azbukaConfig($stateProvider, $urlRouterProvider, $locationProvider) 
    {
        $locationProvider.html5Mode(true);

        $stateProvider.state('catalog', catalogState);
        $stateProvider.state('book', bookState);
        $stateProvider.state('error', errorState);

        $urlRouterProvider.when('/', '/catalog');

        $urlRouterProvider.otherwise(function ($injector, $location) {
            $injector.invoke(['$state', function ($state) { $state.go('error'); }]);
            return true;
        });
    }

    function azbukaRun($rootScope, $state)
    {
        $rootScope.$on('$stateChangeError', function() 
        {
            $state.go('error');
        });       
    }

    azbukaModule.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', azbukaConfig]);
    azbukaModule.run(['$rootScope', '$state', azbukaRun]);

    azbukaModule.constant('dsAPI',      'https://ds.aggregion.com/api');
    azbukaModule.constant('storageAPI', 'https://storage.aggregion.com/api');

}());
