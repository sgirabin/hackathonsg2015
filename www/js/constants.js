/**
 * Created by isakrabin on 25/7/15.
 */
angular.module('starter.constants', [])

.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})

.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    resident: 'resident',
    guest: 'guest'
})

.constant('ONEMAP', {
    key: 'h9tY3HEAkrQKIrpw3Ilj93mx8Cph2Hw18IPPmMdD5D2X16mcVBVuQPgR+wpJSpHu8WLnS7XqXHTP0pwe8mdN3iDyXC2tD6ugZWkPBij1F/bKwixPJrBlkhKYNwdqYzbM|mv73ZvjFcSo='
})