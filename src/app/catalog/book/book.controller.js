(function() {
    'use strict';

    function BookCtrl($scope, book)
    {
        $scope.book = book;
    }

    angular.module('azbuka').controller('BookCtrl', ['$scope', 'book', BookCtrl]);
}());
