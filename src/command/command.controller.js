export default class CommandCtrl {

    constructor(itemService, CommandService) {
        this.commandService = CommandService;
        this.itemService = itemService;
        this.storage = localStorage;
        this.suggestions = [];//table with the suggestions
        this.itemList = []; //it will be send to create the command
        this.panier = [];

        this.init();
        this.total = this.commandService.total
        this.promotion = this.commandService.promotion
        this.paye = this.commandService.paye


        this.storage.setItem("panier", JSON.stringify(this.panier))

    }



    //add item
    addItem(itemId, quantity = 1) {
        this.commandService.addItem(itemId, quantity = 1);
    }



    //getPanier
    getPanier() {
        this.panier = this.itemService.panier;
        //JSON.parse(this.storage.getItem("panier"))
    }




    //remove item(s) from basket (localStorage)!!!!
    removeItem(idItem) {
        this.commandService.removeItem(idItem)
    }

    //change the quantity!!!!!
    changeQuantity(item) {

        this.commandService.changeQuantity(item)
    }







    passCommande() {
        //create current in command service
        this.commandService.createCommand(sessionStorage.getItem("userId"));

    }

    modifyCommande() {
        //redirect
        this.$location.path("/panier")
    }

    confirmCommande() {
        //put
        this.commandService.finalizeCommand();
    }

    init() {

        return new Promise((resolve, reject) => {
            this.commandService.panier.forEach(element => {
                this.itemService.getItemById(element.item).then(item => {
                    let priceTotal;
                    if (!item.price) {
                        item.items.forEach((truc) => {
                            this.itemService.getItemById(truc).then(chose => {
                                priceTotal += chose.price;
                            })
                        })
                        priceTotal * element.coeff
                    } else { priceTotal = item.price }

                    this.panier.push({ item: item, quantity: element.quantity, price: priceTotal })
                })
                console.log(element.price)
            });
        })
    }

}