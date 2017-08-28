
import CommandService from './command.service'
import CommandCtrl from './command.controller'

import ItemService from "../item/item.service"
import ApiUrlsService from "../apiUrls/apiUrls.service"

import gestion from './gestionPannier.html'
import visual from './visualizerCommande.html'

const commandModule = angular.module('commandModule', [])
.service('CommandService', CommandService)
.controller(CommandCtrl.name, CommandCtrl)
.service('itemService', ItemService)
.value('apiUrlsService', ApiUrlsService)


export default commandModule