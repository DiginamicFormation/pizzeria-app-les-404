export default class createAccountCtrl {
	constructor(logService, $location) {
		this.logService = logService
		this.$location = $location
	}

	tryCreate(email, password) {
		if (email && password) {
			this.logService.isMailFree(email)
				.then(free => {
					if (free) {
						this.logService.createUser({email: email, password: password})
							.then(() => {
								this.logService.checkUser(email, password)
									.then(user => {
										this.logService.connect(user.id)
										this.$location.path('/')
										this.$location.hash('')
									})
							})

					} else {
						this.$location.hash('alreadyTaken')
					}
				})
		} else {
			this.$location.hash('invalid')
		}
	}

	backHome() {
		this.$location.path('/logging')
		this.$location.hash('')
	}
}

createAccountCtrl.$inject = [
	'logService',
	'$location'
]