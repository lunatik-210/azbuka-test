(function() {
    'use strict';

    function Storage(storageAPI)
    {
        var storage = {};

        storage.getFileUrl = function(id)
        {
            return storageAPI + '/files/' + id + '/shared/data';
        };

        return storage;
    }

    angular.module('azbuka').factory('Storage', ['storageAPI', Storage]);
})();
