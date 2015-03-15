angular.module('ParseService', [])

    .factory('posts', ['$http', function ($http) {

        var obj = {
            posts: []
        };

        var parseHeader = {
            'X-Parse-Application-Id': 'XbBMwuGt3JYTCV5FMb5g35RbM2hYEuidQBGi0SCa',
            'X-Parse-REST-API-Key': 'LA9ZaNSIZ4I0CSZY7aZViLEGwv5WNiQckMfeqKx3',
            'Content-Type': 'application/json; charset=utf-8'
        };

        obj.getAll = function () {
            var requestUrl = "https://api.parse.com/1/classes/Saying";
            return $http({
                method: 'GET',
                url: requestUrl,
                headers: parseHeader,
                cache: true
            })
                .success(function (json) {
                    var results = json.results;
                    angular.copy(results, obj.posts);
                })
        };

        obj.create = function (post) {
            var requestUrl = "https://api.parse.com/1/classes/Saying";
            return $http({
                method: 'POST',
                url: requestUrl,
                headers: parseHeader,
                data: JSON.stringify(post),
                processData: false,
                dataType: 'json',
            })
                .success(function(post) {
                    obj.posts.push(post);
                })
        };

        return obj;
    }]);