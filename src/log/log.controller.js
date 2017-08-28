export default class logCtrl{
    constructor(logService, $location){
        this.logService = logService
        this.$location = $location
    }
    
    tryConnect(email, password){
        if(this.logService.checkUser(email, password)){
            this.logService.connect()
            this.location.path('/')
        }else{
            this.$location.path('/logging')
            this.$location.hash('error')
        }
    }
}

logCtrl.$inject = ['logService', '$location'];