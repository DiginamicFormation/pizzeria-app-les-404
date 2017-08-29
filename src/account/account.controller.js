export default class AccountController {
    constructor() {
        this.master = {};
        this.reset();
    }

    update(user) {
        this.master = angular.copy(user);
    }

    reset() {
        this.user = angular.copy(this.master);
    }
}