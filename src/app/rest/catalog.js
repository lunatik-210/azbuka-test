(function() {
    'use strict';
    
    function Catalog($resource, dsAPI)
    {
        return $resource(dsAPI+'/public/catalog/:id');
    }

    angular.module('azbuka').factory('Catalog', ['$resource', 'dsAPI', Catalog]);
})();
