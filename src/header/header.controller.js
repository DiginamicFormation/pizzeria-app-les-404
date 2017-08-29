export default class headerCtrl{
    //constructor(logService, commandService, $location){
    constructor(logService, $location){
        this.logService = logService
        //this.commandService = commandService
        this.$location = $location
        this.logo = {title: "Pizzeria 404", url: "assets/img/404-logo.png"}
    }
    
    getBasketAmount(){
        return this.commandService.getAmount()
    }
    
    getConnectionStatus(){
        return this.logService.isConnected()
    }
    
    
}

//headerCtrl.$inject = ['logService', 'commandService', '$location']
headerCtrl.$inject = ['logService', '$location']