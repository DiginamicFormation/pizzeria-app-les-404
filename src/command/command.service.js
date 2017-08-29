export default class CommandService {

    constructor($http) {
        this.$http = $http;


        $http({method: 'GET', url: 'http://localhost:3000/command'})
            .then((response) => {
                this.listCommands = response.data
            })


    }

    listCommands() {
        return listCommands;
    }

//initializes basket
    createCommand(idUser, itemList) {
        return this.currentCommand = {
            "id": "CMD" + Math.floor((Math.random() * 100) + 1),
            "idUser": idUser,
            "items": itemList,
            "date": null,
            "status": null,
        }
    } 

//create the command
    finalizeCommand() {

        //correct id pour la commande??

        this.$http({
            method: 'POST',
            url: 'http://localhost:3000/command/',
            data:
                this.currentCommand

        })
            .then((response) => {
            })

    }
    
    getAmount(){
        return 0;
    }

}





