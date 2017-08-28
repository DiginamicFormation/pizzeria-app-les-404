export default class logCtrl{
    constructor(logService){
        this.logService = logService
    }
}

logCtrl.$inject = ['logService'];