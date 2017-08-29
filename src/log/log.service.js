export default class logService {
    constructor($http, apiUrlsService){
        this.$http = $http
        this.apiUrls = apiUrlsService
    }
    
    isConnected(){
        return sessionStorage.getItem('session')
    }
    
    checkUser(email, password){
        return this.$http.get(this.apiUrls.account)
            .then(users => {
                return users.data
            })
            .then(users => {
                let found = false;
                if(users.length>0){
                    users.forEach(user => {
                        if(user.email == email && user.password == password){
                            found = true
                        }
                    })
                }
                return found;
            })
    }
    
    isMailFree(email){
        return this.$http.get(this.apiUrls.account)
            .then(users => {
                return users.data
            })
            .then(users => {
                let free = true;
                users.forEach(user => {
                    if(user.email == email){
                        free = false;
                    }
                })
                return free
            })
    }
    
    connect(){
        sessionStorage.setItem('session', true)
    }
    
    disconnect(){
        sessionStorage.removeItem('session')
        sessionStorage.clear()
    }
    
    createUser(user){
        if(user.email && user.password){
            this.$http.post(this.apiUrls.account, user)
        }
    }
}