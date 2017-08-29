export default class CommandService {

    constructor($http, itemService) {
        this.$http = $http;


        this.itemService = itemService;

        $http({ method: 'GET', url: 'http://localhost:3000/command' })
            .then((response) => {
                this.listCommands = response.data
            })


    }

    listCommands() {
        return listCommands;
    }

    //initializes basket
    createCommand(idUser, itemList) {
        let d = new Date()
        this.itemList = itemList
        return this.currentCommand = {
            "id": "CMD" + Math.floor((Math.random() * 100) + 1),
            "idUser": idUser,
            "items": this.itemList,
            "date": d.getDate(),
            "status": "delivered",
        }
    }

    //create the command
    finalizeCommand() {
        this.$http({
            method: 'POST',
            url: 'http://localhost:3000/command/',
            data:
            this.currentCommand
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





