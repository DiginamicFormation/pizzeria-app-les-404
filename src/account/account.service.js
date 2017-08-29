export default class AccountService {
    constructor($http, apiUrlsService) {
        this.$http = $http
        this.apiUrls = apiUrlsService
    }

    getUserById(userId) {
        return this.$http.get(this.apiUrls.account + "/" + userId)
            .then(result => {
                return result.data
            })
    }

    updateUser(user) {
        if (user.email && user.password) {

            console.log(user);
            console.log(JSON.stringify(user));

            this.$http.put(this.apiUrls.account + "/" + user.id, JSON.stringify(user)).then(
                (response) => {
                    console.log(`User with id [${user.id}] was updated successfully`);
                },
                (response) => {
                    console.log(`User with id [${user.id}] couldn't not be updated: ${response}`);
                }
            );
        }
    }

    getUserCommands(userId) {
        return this.$http.get(this.apiUrls.command)
            .then(result => {
                let commands = result.data
                return commands.filter(cmd => cmd.idUser === userId)
            })
    }
}