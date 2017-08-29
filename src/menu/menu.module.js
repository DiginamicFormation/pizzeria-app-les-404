import ngRoute from 'angular-route'

// Services
import ItemService from "../item/item.service"
import ApiUrlsService from "../apiUrls/apiUrls.service"

// Components
import itemsListComponent from "./itemsList.component"

const menuModule = angular
    .module('menuModule', [ngRoute])

    .component('itemsListComponent', itemsListComponent)

    .service('itemService', ItemService)
    .value('apiUrlsService', ApiUrlsService)

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/menu', {
                template: '<items-list-component></items-list-component>'
            })
    }])

export default menuModule