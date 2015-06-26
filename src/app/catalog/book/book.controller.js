(function() {
    'use strict';

    function BookCtrl($scope, book, bundles, Storage, BookBundles)
    {
        $scope.book = book;

        $scope.bundles = bundles;

        $scope.Storage = Storage;

        $scope.BookBundles = BookBundles;
    }

    angular.module('azbuka').controller('BookCtrl', ['$scope', 'book', 'bundles', 'Storage', 'BookBundles', BookCtrl]);
}());
