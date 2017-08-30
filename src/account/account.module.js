import ngRoute from 'angular-route'
import apiUrlsService from '../apiUrls/apiUrls.service'

import accountService from './account.service'
import logService from '../log/log.service'

import accountComponent from './account.component'

const accountModule = angular
    .module('accountModule', [ngRoute])

    .component('accountComponent', accountComponent)

    .value('apiUrlsService', apiUrlsService)
    .service('accountService', ['$http', 'apiUrlsService', accountService])
    .service('logService', logService)

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/account', {
                template: '<account-component></account-component>',
                resolve:{
                    "check": ($location, logService) => {
                        if(!logService.isConnected()){
                            $location.path('/logging')
                        }
                    }
                }
            })
    }])


export default accountModule