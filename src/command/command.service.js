export default class CommandService {

    constructor($http, itemService) {
        this.$http = $http;
        this.itemService = itemService;
        this.itemList = [];
        //initialization of panier
        this.panier = [];
        this.currentCommand = this.createCommand();

        /**this.panier.items.forEach(e => {
            itemService.getItemById(e.item).then(item => {
                e.item = item
            })*/


        this.$http({ method: 'GET', url: 'http://localhost:3000/command' })
            .then((response) => {
                this.listCommands = response.data
            })

    }

    createList() {
        this.panier.forEach((element) => {
            for (let i = 0; i < element.quantity; i++)
                this.itemList.push(element.id)
        })
        return this.itemList;
    }

    updateCommand(){
        let d = new Date()
        let dd = d.getDate()
        let mm = d.getMonth() + 1
        let yy = d.getFullYear()
        let dat = dd + '/' + mm + '/' + yy;
        this.itemList = this.createList();
        this.currentCommand.items =this.itemList;
        this.currentCommand.date =dat;
    }
    //initializes basket
    createCommand() {
        let user = sessionStorage.getItem("userId");
        let d = new Date()
        let num = Math.floor((Math.random() * 100) + 1)
        let id = 'CMD' + num

        this.currentCommand = {
            "id": id,
            "idUser": user,
            "items": this.itemList,
            "date": d,
            "status": "delivered"
        }
        console.log(this.currentCommand)
        return this.currentCommand;
    }

    listCommands() {
        return listCommands;
    }

    refresh() {
        this.itemList = [];
        this.createList()
        this.calculss()
    }


    //add item to panier
    //add if the item already exists
    addItem(itemId, quantity) {
        let found = this.panier.find(i => i.item == itemId)
        if (found) {
            found.quantity += quantity
        } else {
            this.panier.push({ item: itemId, quantity: 1 })
        }
        if(found && found.quantity==0){
            this.panier.splice(this.panier.indexOf(found), 1)
        }
        this.refresh();
    }

    //change the quantity!!!!!
    changeQuantity(item) {
        this.panier.forEach((element) => {
            if (item.item.id == element.id) {
                element.quantity = item; item.quantity;
            }
        })
        this.refresh();

    }

    removeItem(idItem) {

        let newPanier = [];
        this.panier.forEach(item => {
            if (item.item.id != idItem) {
                newPanier.push(item);
            }
        })

        this.panier = newPanier;
        this.refresh();
    }

    

    



    //POST the command
    finalizeCommand() {
        this.updateCommand()
        this.postCommand()
        this.emptyCommand()
    }

    postCommand(){
         this.$http({
            method: 'POST',
            url: 'http://localhost:3000/command/',
            data: this.currentCommand
        })
            .then((response) => {
            })
    }
    emptyCommand(){
        this.itemList = [];
        this.panier = [];
        this.currentCommand = this.createCommand();
    }

    getAmount() {
        return this.itemList.length;
    }


    calculss() {
        this.total = 0;
        this.currentCommand.items.forEach((element) => {
            this.itemService.getItemById(element).then(item => {
                this.total = this.total + item.price
            })
        })
        this.promotion = 0.1 * this.total
        this.paye = this.total - this.promotion
    }


    calculs(command) {
         let total = 0;
      
         command.items.forEach((element) => {
             total = total + this.itemService.getItemById(element).price
         })
        let promotion = 0.1 * total
        return paye = total - promotion
     }

}





