export default class logService {
    constructor($http){
        this.$http = $http
    }
    
    isConnected(){
        return sessionStorage.getItem('session')
    }
    
    checkUser(email, password){
        let found = false
        this.$http.get('localhost:3000/account')
            .then(users => {
                users.forEach(user => {
                    if(user.email == email && user.password == password){
                        found = true
                    }
                })
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
            this.$http.post('localhost:3000/account', user)
        }
    }
    
    getNextId(){
        let maxId = false
        this.$http.get('localhost:3000/account')
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