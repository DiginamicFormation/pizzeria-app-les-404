
export default class CommandService {

    constructor($http){
        this.$http = $http;

        $http({method:'GET', url:'http://localhost:3000/command'})
        .then((response) => {
        this.listCommands = response.data
        })
        
         $http({method:'GET', url:'http://localhost:3000/item'})
        .then((response) => {
        this.listItems = response.data
        })

}



//initializes basket
createCommand(idUser) {
   return this.currentCommand = {
            "id" : null,
            "idUser": idUser,
            "items": [
                null,
                null,
                null,
            ],
            "date": null,
            "status": null,
        }
} 



    






//number of items in the basket (localStorage)
getItemsNumber(idItem){
    

} 

//create the command
finalizeCommand() {
   
   //correct id pour la commande??

    this.$http({
        method:'POST', 
        url:'http://localhost:3000/command/',
        data: 
           this.currentCommand

        })
    .then((response) => {
    } )

}

}  





