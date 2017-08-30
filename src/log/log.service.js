export default class logService {
	constructor($http, apiUrlsService) {
		this.$http = $http
		this.apiUrls = apiUrlsService
	}

	isConnected() {
		if (sessionStorage.getItem('session')) {
			return true
		} else {
			return false
		}
	}

	checkUser(email, password) {
		return this.$http.get(this.apiUrls.account)
			.then(users => {
				return users.data
			})
			.then(users => {
				return users.find(
					user => user.email == email && user.password == password);
			})
	}

	isMailFree(email) {
		return this.$http.get(this.apiUrls.account)
			.then(users => {
				return users.data
			})
			.then(users => {
				return users.filter(user => user.email == email).length === 0
			})
	}

	connect(userId) {
		console.log(userId);
		sessionStorage.setItem('session', true)
		sessionStorage.setItem('userId', userId)
	}

	disconnect() {
		sessionStorage.removeItem('session')
		sessionStorage.removeItem('userId')
        sessionStorage.clear()
        this.$location.path('/')
	}

	createUser(user) {
		if (user.email && user.password) {
			return this.$http.post(this.apiUrls.account, user)
		}
	}
}