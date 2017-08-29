import ngRoute from 'angular-route'
import apiUrlsService from '../apiUrls/apiUrls.service'

import accountService from './account.service'
import accountComponent from './account.component'

const accountModule = angular
    .module('accountModule', [ngRoute])

    .component('accountComponent', accountComponent)

    .value('apiUrlsService', apiUrlsService)
    .service('accountService', ['$http', 'apiUrlsService', accountService])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/account', {
                template: '<account-component></account-component>'
            })
    }])


export default accountModule