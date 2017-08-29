export default class AccountController {
    constructor($http, accountService) {
        this.accountService = accountService

        this.master = {};
        this.reset();

        this.userId = sessionStorage.getItem('userId', true);

        accountService.getUserAccountById(this.userId).then((user) => {
            this.user = user
            this.master = angular.copy(user)
        })

        accountService.getUserAccountCommands(this.userId).then((commands) => {
            this.commands = commands
        })
    }

    update(user) {
        this.master = angular.copy(user)
        this.accountService.updateUserAccount(user)
    }

    reset() {
        this.user = angular.copy(this.master)
    }
}

AccountController.$inject = ['$http', 'accountService']