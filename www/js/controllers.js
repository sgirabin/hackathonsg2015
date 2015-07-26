/**
 * Created by isakrabin on 25/7/15.
 */

angular.module('starter.controllers', [])


.controller('CommonCtrl', function($scope, $state, $ionicHistory, $ionicActionSheet) {
    $scope.navToPreviousPage = function() {
        $ionicHistory.goBack();
    };

    $scope.show = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: 'Facebook' },
                { text: 'Twitter' }
            ],
            titleText: 'Share',
            cancelText: 'Cancel',
            cancel: function() {
                return false;
            },
            buttonClicked: function(index) {
                return true;
            }
        });


    };
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

        var error = "Invalid username or password.";
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
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

.controller('SearchCtrl', function($scope, $state, $http, MapService) {
    $scope.input = {
        postalCode: "544204"
    };

    $scope.map = {
        token: '',
        url: ''
    }

    $scope.getLocation = function(postalCode) {
        console.log(postalCode);

        MapService.getToken().then(function (result) {
            console.log("Token = " + result);
            $scope.map = {
                token: result,
                url: 'http://www.onemap.sg/API/Services.svc/getMap?token=' + result
            };
            console.log("Map = " + map.url);
            $state.go('result');
        }, function () {
            console.log("failed");
        });

        $state.go('result');
    };

    $scope.start = function() {
        $state.go('dashboard');
    };
})

.controller('DashboardCtrl', function($scope, $state, $ionicHistory) {
    $ionicHistory.clearHistory();
})

.controller('LocationCtrl', function($scope, $state) {
    $scope.items = [{
        id: 1,
        title: 'Makan Place',
        notifications: '10 promotions',
        image: ''
    },
    {
        id: 2,
        title: 'Clinic',
        notifications: 'New Clinic has opened',
        image: ''
    },
    {
        id: 3,
        title: 'Bus Stop',
        notifications: 'Traffic diversion for Service 16',
        image: ''
    },
    {
        id: 4,
        title: 'Petrols',
        notifications: '2 Promotions',
        image: ''
    }];
})

.controller('ActivityCtrl', function($scope, $state) {
    $scope.items = [
        {
            id: 1,
            title: 'National Day Dinner',
            schedule: '10 August 2015, 7PM',
            location: '200A Sengkang East Road, Void Deck',
            like: 5,
            comment: 10,
            publisherImage: '',
            eventImage: ''
        },
        {
            id: 2,
            title: 'Meet Your MP',
            schedule: '11 August 2015, 7PM',
            location: '200A Sengkang East Road, Void Deck',
            like: 3,
            comment: 1,
            publisherImage: '',
            eventImage: ''
        },
        {
            id: 3,
            title: 'Durian Tour',
            schedule: '17 August 2015, 7PM',
            location: 'Johor Bahru',
            like: 15,
            comment: 30,
            publisherImage: '',
            eventImage: ''

        },
        {
            id: 4,
            title: 'Japanese Cooking Class',
            schedule: '25 August 2015, 7PM',
            location: 'Sengkang CC',
            like: 5,
            comment: 10,
            publisherImage: '',
            eventImage: ''
            }];
})

.controller('NoticeCtrl', function($scope, $state) {
    $scope.notices = [
        {
            id: 1,
            title: "Fogging",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "5 August 2015, 1-5PM",
            location: "",
            image: ""
        },
        {
            id: 2,
            title: "Dengue Alert",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "",
            location: "",
            image: ""
        },
        {
            id: 3,
            title: "Missing Dogs",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "",
            location: "",
            image: ""
        },
        {
            id: 4,
            title: "General Cleaning",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "",
            location: "",
            image: ""
        },
        {
            id: 4,
            title: "MP Visits",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "5 August 2015, 1-5PM",
            location: "",
            image: ""
        },

    ];
    $scope.archives = [
        {
            id: 1,
            title: "Fogging",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "5 August 2015, 1-5PM",
            location: "",
            image: ""
        },
        {
            id: 2,
            title: "Dengue Alert",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "",
            location: "",
            image: ""
        },
        {
            id: 3,
            title: "Missing Dogs",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "",
            location: "",
            image: ""
        },
        {
            id: 4,
            title: "General Cleaning",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "",
            location: "",
            image: ""
        },
        {
            id: 5,
            title: "MP Visits",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            schedule: "5 August 2015, 1-5PM",
            location: "",
            image: ""
        },
    ];
})

.controller('NoticeDetailCtrl', function($scope, $state) {
    
})

.controller('PasarCtrl', function($scope, $state) {
        $scope.items = [
            {
                id: 1,
                title: "Hari Raya Cookie",
                description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                location: "",
                image: ""
            },
            {
                id: 2,
                title: "Homemade Barley",
                description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                location: "",
                image: ""
            },
            {
                id: 3,
                title: "Delicious Nasi Padang",
                description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                location: "",
                image: ""
            }
        ];
})

.controller('MomentCtrl', function($scope, $state) {
        $scope.items = [
            {
                id: 1,
                title: "Hari Raya Celebration",
                description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                like: 3,
                comment: 1,
                image: ""
            },
            {
                id: 2,
                title: "National Day Dinner",
                description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                like: 3,
                comment: 1,
                image: ""
            },
            {
                id: 3,
                title: "Grassroot Volunteer Activities",
                description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                like: 3,
                comment: 1,
                image: ""
            }
        ];
})

.controller('MessageCtrl', function($scope, $state) {
    
})

.controller('CornerCtrl', function($scope, $state) {
        $scope.items = [
            {
                id: 1,
                title: "Mother & Baby",
                description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                image: ""
            },
            {
                id: 2,
                title: "Kids CCA",
                description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                image: ""
            },
            {
                id: 3,
                title: "Pets",
                description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                image: ""
            }
        ];
})

.controller('SettingCtrl', function($scope, $state) {
    $scope.settings = {
        enableFriends: true,
        enablePushNotifications: true
    };
});