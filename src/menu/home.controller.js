export default class homeCtrl {
    constructor(itemService, $location) {
        this.$location = $location
        this.itemsList = []

        itemService.getItemsByType("pizza").then((result) => {
            for(let i = result.length-1; i>result.length-7; i--){
                if(result[i]){
                    this.itemsList.push(result[i])
                }
            }
            console.log(this.itemsList)
        })
    }
}

homeCtrl.$inject = ['itemService', '$location'];