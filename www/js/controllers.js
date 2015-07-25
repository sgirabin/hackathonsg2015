/**
 * Created by isakrabin on 25/7/15.
 */

angular.module('starter.controllers', [])


.controller('WelcomeCtrl', function($scope, $state) {
    $scope.navToLogin = function() {
        $state.go('login')
    }
    $scope.navToSearch = function() {
        $state.go('search');
    }
})


.controller('SearchCtrl', function($scope, $state) {
    $scope.navToHome = function() {
        $state.go('dashboard');
    }
})

.controller('DashboardCtrl', function($scope, $state) {

})

.controller('SettingCtrl', function($scope, $state) {
    $scope.settings = {
        enableFriends: true
    };
});