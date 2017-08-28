import CommandService from './command.service'
import CommandCtrl from './command.controller'

import gestion from './gestionPannier.html'
import visual from './visualizerCommande.html'

const commandModule = angular.module('commandModule', [])
.service('CommandService', CommandService)
.controller(CommandCtrl.name, CommandCtrl)


export default commandModule