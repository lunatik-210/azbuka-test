(function() {
    'use strict';
    
    function BookBundles($resource, dsAPI)
    {
        return $resource(dsAPI+'/public/catalog/:book_id/bundles/:bundle_id');
    }

    angular.module('azbuka').factory('BookBundles', ['$resource', 'dsAPI', BookBundles]);
})();
