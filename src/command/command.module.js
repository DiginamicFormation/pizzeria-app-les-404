
import CommandService from './command.service'
import CommandCtrl from './command.controller'

import ItemService from "../item/item.service"
import ApiUrlsService from "../apiUrls/apiUrls.service"

import pannier from './pannier.html'
import commande from './commande.html'

const commandModule = angular.module('commandModule', ['ngRoute'])
.service('CommandService', CommandService)
.controller(CommandCtrl.name, CommandCtrl)
.service('itemService', ItemService)
.value('apiUrlsService', ApiUrlsService)
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/pannier',{
        template:  pannier  ,
        controller: 'CommandCtrl'
    }).when('/commande', {
        template:  commande  ,
        controller: 'CommandCtrl'
    });



}])



export default commandModule