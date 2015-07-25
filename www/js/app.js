// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in page-search.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('welcome', {
                url: '/',
                templateUrl: 'templates/page-welcome.html',
                controller: 'WelcomeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/page-login.html',
                controller: 'LoginCtrl'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'templates/page-search.html',
                controller: 'SearchCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/page-dashboard.html',
                controller: 'DashboardCtrl'
            })
            .state('notice', {
                url: '/notice',
                templateUrl: 'templates/page-notice.html',
                controller: 'NoticeCtrl'
            })
            .state('setting', {
                url: '/setting',
                templateUrl: 'templates/page-setting.html',
                controller: 'SettingCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');

    });



