export default class CommandService {

    constructor($http, itemService) {
        this.$http = $http;


        this.itemService = itemService;

        this.$http({ method: 'GET', url: 'http://localhost:3000/command' })
            .then((response) => {
                this.listCommands = response.data
            })


            this.itemList = [];
            this.currentCommand;

    }

    listCommands() {
        return listCommands;
    }

    //initializes basket
    createCommand(idUser, itemList) {
        let d = new Date()
        let dd = d.getDate()
        let mm = d.getMonth()+1
        let yy = d.getFullYear()
        let dat = dd+'/'+mm +'/'+ yy;
        this.itemList = itemList
        let num=Math.floor((Math.random() * 100) + 1)
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

    //create the command
    finalizeCommand() {
        console.log(this.currentCommand)
        this.$http({
            method: 'POST',
            url: 'http://localhost:3000/command/',
            data:this.currentCommand
        })
            .then((response) => {
            })

    }


    getAmount() {
        return this.itemList.length;
    }


    calculs(commande) {
        let total = 0;
        commande.items.forEach((element) => {
            this.total = this.total + itemService.getItemById(element).price
        })
        let promotion = 0.1 * this.total
        this.paye = total - promotion
    }


}





