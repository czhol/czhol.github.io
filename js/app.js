angular.module('app', ['ngMaterial', 'ui.router', 'MainCtrl', 'ParseService'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'MainController as mainCtrl',
                resolve: {
                    postPromise: ['posts', function (posts) {
                        return posts.getAll();
                    }]
                }
            });
    });