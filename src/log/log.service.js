export default class logService {
    constructor($http, apiUrlsService){
        this.$http = $http
        this.apiUrls = apiUrlsService
    }
    
    isConnected(){
        return sessionStorage.getItem('session')
    }
    
    checkUser(email, password){
        let found = false
        this.$http.get(this.apiUrls.account)
            .then(users => {
                if(users.length>0){
                    users.forEach(user => {
                        if(user.email == email && user.password == password){
                            found = true
                        }
                    })
                }
        })
        return found
    }
    
    connect(){
        sessionStorage.setItem('session', true)
    }
    
    disconnect(){
        sessionStorage.removeItem('session')
        sessionStorage.clear()
    }
    
    createUser(user){
        if(user.email && user.password && !this.checkUser(user.email, user.password)){
            user.id = this.getNextId()
            this.$http.post(this.apiUrls.account, user)
        }
    }
    
    getNextId(){
        let maxId = false
        this.$http.get(this.apiUrls.account)
            .then(users => {
                users.forEach(user => {
                    if(user.id > maxId){
                        maxId = user.id
                    }
                })
        })
        if(!maxId){
            maxId = 1
        }
        return maxId
    }
}