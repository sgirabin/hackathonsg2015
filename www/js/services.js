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

.factory('MapService', function($http) {
    var mapService = {};

    mapService.getToken = function() {
        console.log("Get OneMap Token");
        return $http.get('http://www.onemap.sg/API/services.svc/getToken?accessKEY=h9tY3HEAkrQKIrpw3Ilj93mx8Cph2Hw1pQSSsLVkvpPifJR7/l+Fdahzz5MgN1/iI4VZqwC3UJSfFAsO7XFxSlZMcK1n/oGx|mv73ZvjFcSo=').then(function(resp) {
            console.log('Success', resp);
            if (resp.data.GetToken[0].NewToken) {
                return resp.data.GetToken[0].NewToken;
            }else {
                return -1;
            }
        }, function(err) {
            console.error('ERR', err);
        });
    };

    return mapService;
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

