export default class ItemsListCtrl {
    constructor(itemService, $location) {
        this.itemService = itemService
        this.$location = $location
        this.itemType = this.$location.hash()

        console.log("hash:", this.$location.hash());

        itemService.getItemsByType(this.itemType).then((result) => {
            this.itemsList = result
        })
    }

    getItemsList() {
        return this.itemsList
    }

    addToBasket(idItem, quantity = 1) {
        console.log("Add to basket: idItem:", idItem, "/ qty:", quantity);
    }

    removeFromBasket(idItem, quantity = 1) {
        console.log("Remove from basket: idItem:", idItem, "/ qty:", quantity);
    }
}

ItemsListCtrl.$inject = ['itemService', '$location'];