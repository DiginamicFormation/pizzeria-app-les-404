export default class ItemsListCtrl {
    constructor(itemService, logService, $location, CommandService) {
        this.itemService = itemService
        this.logService = logService
        this.$location = $location
        this.itemType = this.$location.hash()
        this.CommandService = CommandService;

        itemService.getItemsByType(this.itemType).then((result) => {
            this.itemsList = result
        })
    }

    getItemsList() {
        return this.itemsList
    }

    addToBasket(idItem, quantity = 1) {

        console.log("Add to basket: idItem:", idItem, "/ qty:", quantity);
        this.CommandService.addItem(idItem, quantity);
    }

    removeFromBasket(idItem, quantity = -1) {
        console.log("Remove from basket: idItem:", idItem, "/ qty:", quantity);
         console.log("Add to basket: idItem:", idItem, "/ qty:", quantity);
        this.CommandService.addItem(idItem, quantity);
    }
}

ItemsListCtrl.$inject = ['itemService', 'logService', '$location', 'CommandService'];