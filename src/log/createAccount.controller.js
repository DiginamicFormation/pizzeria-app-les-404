export default class createAccountCtrl{
    constructor(logService, $location){
        this.logService = logService
        this.$location = $location
    }
    
    tryCreate(email, password){
        this.logService.isMailFree(email)
            .then(free => {
                if(free){
                    this.logService.createUser({email: email, password: password})
                    this.logService.connect()
                    this.$location.path('/')
                    this.$location.hash('')
                }else{
                    this.$location.path('/createAccount')
                    this.$location.hash('alreadyTaken')
                }
            })
    }
}

createAccountCtrl.$inject = ['logService', '$location']