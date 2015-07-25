/**
 * Created by isakrabin on 25/7/15.
 */

angular.module('starter.controllers', [])


.controller('CommonCtrl', function($scope, $state, $ionicHistory) {
    $scope.navToPreviousPage = function() {
        $ionicHistory.goBack();
    }
})


.controller('WelcomeCtrl', function($scope, $state, USER_ROLES, AuthenticationService) {

    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthenticationService.isAuthorized;

    $scope.navToLogin = function() {
        $state.go('login')
    };

    $scope.navToSearch = function() {
        $state.go('search');
    };
})

.controller('LoginCtrl', function($scope, $rootScope, $http, $state, AUTH_EVENTS, AuthenticationService) {
    $scope.message = "";

    $scope.user = {
        username: null,
        password: null
    };

    $scope.setCurrentUser = function (user) {
        console.log('User Login: ' + user.id + ' - Role: ' + user.role);
        $scope.currentUser = user;
    };

    $scope.doLogin = function(user) {
        AuthenticationService.login(user).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };

    $scope.$on('event:auth-not-authenticated', function(e, rejection) {
        $scope.go('login');
    });

    $scope.$on('event:auth-login-success', function() {
        $scope.go('dashboard');
    });

    $scope.$on('event:auth-login-failed', function(e, status) {
        var error = "Login failed.";
        if (status == 401) {
            error = "Invalid Username or Password.";
        }
        $scope.message = error;
    });

    $scope.$on('event:auth-logout-complete', function() {
        $state.go('login', {}, {reload: true, inherit: false});
    });

})

.controller('LogoutCtrl', function($scope, AuthenticationService) {
    AuthenticationService.logout();
})

.controller('SearchCtrl', function($scope, $state) {
    $scope.navToHome = function() {
        $state.go('dashboard');
    }
})

.controller('DashboardCtrl', function($scope, $state, $ionicViewService) {
    $ionicViewService.clearHistory();
})

.controller('KampongCtrl', function($scope, $state) {
    
})

.controller('ActivityCtrl', function($scope, $state) {
    
})

.controller('NoticeCtrl', function($scope, $state) {
    
})

.controller('NoticeDetailCtrl', function($scope, $state) {
    
})

.controller('PasarCtrl', function($scope, $state) {
    
})

.controller('MomentCtrl', function($scope, $state) {
    
})

.controller('MessageCtrl', function($scope, $state) {
    
})

.controller('CornerCtrl', function($scope, $state) {
    
})

.controller('SettingCtrl', function($scope, $state) {
    $scope.settings = {
        enableFriends: true
    };
});