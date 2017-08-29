

// Services
import ItemService from "../item/item.service"
import ApiUrlsService from "../apiUrls/apiUrls.service"
import CommandService from './command.service'

// Components

import commandComponent from './command.component'
import panierComponent from './panier.component'

const commandModule = angular.module('commandModule', ['ngRoute'])

.service('CommandService', CommandService)
.service('itemService', ItemService)
.value('apiUrlsService', ApiUrlsService)
.component('commandComponent', commandComponent)
.component('panierComponent', panierComponent)
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/panier',{
        template: '<panier-component></panier-component>'
    }).when('/commande', {
        template: '<command-component></command-component>'
    });



}])

export default commandModule