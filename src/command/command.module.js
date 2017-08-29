
import CommandService from './command.service'
import CommandCtrl from './command.controller'

import ItemService from "../item/item.service"
import ApiUrlsService from "../apiUrls/apiUrls.service"

import panier from './panier.html'
import footPanier from './footPanier.html'
import commande from './commande.html'
import footCommande from './footCommande.html'

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