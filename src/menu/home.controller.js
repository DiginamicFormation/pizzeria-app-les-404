export default class homeCtrl {
    constructor(itemService, $location) {
        this.$location = $location
        this.itemsList = []

        itemService.getItemsByType("pizza").then((result) => {
            for(let i = 0; i<3; i++){
                this.itemsList.push(result[i])
            }
            console.log(this.itemsList)
        })
    }
}

homeCtrl.$inject = ['itemService', '$location'];