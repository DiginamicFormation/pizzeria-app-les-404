export default class headerCtrl{
    constructor(logService, CommandService, $location){
        this.logService = logService
        this.commandService = CommandService
        this.$location = $location
        this.logo = {title: "Pizzeria 404", url: "assets/img/404-logo.png"}
    }
    
    getShoppingCartAmount(){
        return this.commandService.getAmount()
    }
    
    getConnectionStatus(){
        return this.logService.isConnected()
    }
}

headerCtrl.$inject = ['logService', 'CommandService', '$location']