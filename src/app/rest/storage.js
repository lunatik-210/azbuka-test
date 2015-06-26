(function() {
    'use strict';

    function Storage($resource, storageAPI)
    {
        return $resource(storageAPI+'/files/:resourceId/shared/data');
    }

    angular.module('azbuka').factory('Storage', ['$resource', 'storageAPI', Storage]);
})();
