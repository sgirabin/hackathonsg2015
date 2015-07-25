/**
 * Created by isakrabin on 25/7/15.
 */
angular.module('starter.services', [])

.service('Session', function () {
    this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };
    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };
})

.factory('AuthenticationService', function ($http, Session) {
    var authService = {};

    authService.login = function (credentials) {
        return $http
            .post('/', credentials)
            .then(function (res) {
                res = {
                    data: {
                        id: '12345678',
                        user: {
                            id: 'user',
                            role: 'resident'
                        }
                    }
                }

                Session.create(res.data.id, res.data.user.id,res.data.user.role);
                return res.data.user;
            });
    };

    authService.isAuthenticated = function () {
        //return !!Session.userId;
        return false;
    };

    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
})

