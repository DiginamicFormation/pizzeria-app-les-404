import CommandCtrl from './command.controller'
import panier from './panier.html'
import footPanier from './footPanier.html'

const panierComponent = {
    
    template: panier + footPanier,
    controller: CommandCtrl
};

export default footPanier