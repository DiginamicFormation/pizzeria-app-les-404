import ngRoute from 'angular-route'

// Services
import ItemService from "../item/item.service"
import ApiUrlsService from "../apiUrls/apiUrls.service"

// Components
import pizzasComponent from "./pizzas.component"

const menuModule = angular
    .module('menuModule', [ngRoute])

    .component('pizzasComponent', pizzasComponent)

    .service('itemService', ItemService)
    .value('apiUrlsService', ApiUrlsService)

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/pizzas', {
                template: '<pizzas-component></pizzas-component>'
            })
    }])

export default menuModule