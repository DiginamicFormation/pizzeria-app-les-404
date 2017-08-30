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
                this.itemList.push(element.item.id);
        })
        return this.itemList;
    }


    refresh() {

        //this.storage.setItem("panier", JSON.stringify(this.panier))
        this.calculs();
    }


    //add item to panier
    //NOT TESTED
    //add if the item already exists
    /* addItem(itemId, quantity) {
         let item = this.itemService.getItemById(itemId).then(item => {
             let found = this.panier.find(i => i.item==item)
             console.log(found)
             if(found){
                 found.quantity+= quantity
             }else{
                 this.panier.push({ item: item, quantity: 1 })
             }
             /*if(found.quantity==0){
                 this.panier.pop(found)
             }
             //console.log(this.panier)
             this.refresh();
         })
     }*/

    //add item to panier
    //NOT TESTED
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

    listCommands() {
        return listCommands;
    }

    //initializes basket
    createCommand(idUser) {
        this.itemList = this.createList();
        let d = new Date()
        let dd = d.getDate()
        let mm = d.getMonth() + 1
        let yy = d.getFullYear()
        let dat = dd + '/' + mm + '/' + yy;

        let num = Math.floor((Math.random() * 100) + 1)
        let id = 'CMD' + num

        this.currentCommand = {
            "id": id,
            "idUser": idUser,
            "items": this.itemList,
            "date": dat,
            "status": "delivered"
        }
        console.log(this.currentCommand)
        return this.currentCommand;
    }



    //POST the command
    finalizeCommand() {
        this.$http({
            method: 'POST',
            url: 'http://localhost:3000/command/',
            data: this.currentCommand
        })
            .then((response) => {
            })

    }


    getAmount() {
        return this.itemList.length;
    }


    calculs() {
        this.total = 0;
        this.currentCommand.items.forEach((element) => {
            this.itemService.getItemById(element).then(item => {
                this.total = this.total + item.price
            })
        })
        this.promotion = 0.1 * this.total
        this.paye = this.total - this.promotion
    }


    /** calculs(command) {
         this.total = 0;
      
         command.items.forEach((element) => {
             this.total = this.total + this.itemService.getItemById(element).price
         })
 this.promotion = 0.1 * this.total
 this.paye = this.total - this.promotion
     }*/

}





