export default class logCtrl{
    constructor(logService, $location){
        this.logService = logService
        this.$location = $location
        console.log(logService);
    }
    
    tryConnect(email, password){
        this.logService.checkUser(email, password)
            .then(found => {
                if(found){
                    this.logService.connect()
                    this.$location.path('/')
                    this.$location.hash('')
                }else{
                    this.$location.path('/logging')
                    this.$location.hash('error')
                }
        })
    }
}

logCtrl.$inject = ['logService', '$location'];