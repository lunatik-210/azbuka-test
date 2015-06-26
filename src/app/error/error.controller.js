(function() {
    'use strict';

    function ErrorCtrl($scope, $location)
    {
        $scope.path = $location.path();
    }

    angular.module('azbuka').controller('ErrorCtrl', ['$scope', '$location', ErrorCtrl]);
}());
