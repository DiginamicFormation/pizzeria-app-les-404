export default class homeCtrl {
    constructor(itemService, $location) {
        this.$location = $location
        this.itemsList = []

        let pizzas = itemService.getItemsByType("pizza")

        for (let i = pizzas.length - 1; i > pizzas.length - 7; i--) {
            if (pizzas[i]) {
                this.itemsList.push(pizzas[i])
            }
        }
    }
}

homeCtrl.$inject = ['itemService', '$location'];