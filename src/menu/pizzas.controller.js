export default class PizzasCtrl{
    constructor(itemService){
        this.itemService = itemService
        itemService.getItemByType("pizza").then((result) => {
            this.pizzasList = result
        })
    }
}

PizzasCtrl.$inject = ['itemService'];