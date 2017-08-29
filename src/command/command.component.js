import CommandCtrl from './command.controller'
import panier from './panier.html'
import footCommande from './footCommande.html'

const commandComponent = {
    
    template: panier+footCommande,
    controller: CommandCtrl
};

export default commandComponent