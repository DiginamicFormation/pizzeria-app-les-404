export default class logCtrl{
    constructor(logService){
        this.logService = logService
    }
    
    tryConnect(email, password){
        if(this.logService.checkUser(email, password)){
            this.logService.connect()
        }
    }
}

logCtrl.$inject = ['logService'];