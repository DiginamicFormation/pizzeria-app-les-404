
import CommandService from './command.service'
import CommandCtrl from './command.controller'

import ItemService from "../item/item.service"
import ApiUrlsService from "../apiUrls/apiUrls.service"

import panier from './panier.html'
import commande from './commande.html'

import commandComponent from './command.component'

const commandModule = angular.module('commandModule', ['ngRoute'])

.service('CommandService', CommandService)
.service('itemService', ItemService)
.value('apiUrlsService', ApiUrlsService)

.component('commandComponent', commandComponent)

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/panier',{
        template: '<command-component></command-component>'
    }).when('/commande', {
        template: commande
    });



}])

export default commandModule