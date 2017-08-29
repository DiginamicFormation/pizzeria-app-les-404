export default class ItemsListCtrl {
    constructor(itemService,  $location){
        this.itemService = itemService
        this.$location = $location
        this.itemType = this.$location.hash()

        console.log("hash:", this.$location.hash());

        itemService.getItemByType(this.itemType).then((result) => {
            this.itemsList = result
        })
    }
}

ItemsListCtrl.$inject = ['itemService', '$location'];