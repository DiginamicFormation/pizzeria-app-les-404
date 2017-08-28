import ngRoute from 'angular-route'

import logService from './log.service'

import logComponent from './log.component'
import createAccountComponent from './createAccount.component'

const logModule = angular
    .module('logModule', [ngRoute])

    .component('loggingComponent', logComponent)
    .component('createAccountComponent', createAccountComponent)
    
    .service('logService', logService)

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/logging', {
            template: '<logging-component></logging-component>'
        })
        .when('/createAccount', {
            template: '<create-account-component></create-account-component>'
        })
    }])

export default logModule