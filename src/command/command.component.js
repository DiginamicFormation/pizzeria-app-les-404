import CommandCtrl from './command.controller'
import commande from './commande.html'
import footCommande from './footCommande.html'

const commandComponent = {
    
    template: commande+footCommande,
    controller: CommandCtrl
};

export default commandComponent