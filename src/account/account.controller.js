export default class AccountController {
    constructor($http, accountService) {
        this.accountService = accountService

        this.master = {};
        this.reset();

        accountService.getUserById(sessionStorage.getItem('userId', true)).then((user) => {
            this.user = user
            this.master = angular.copy(user)
        })
    }

    update(user) {
        this.master = angular.copy(user)
        this.accountService.updateUser(user)
    }

    reset() {
        this.user = angular.copy(this.master)
    }
}

AccountController.$inject = ['$http', 'accountService']