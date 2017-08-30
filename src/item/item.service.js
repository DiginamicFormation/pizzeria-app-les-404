export default class ItemService {
	constructor($http, apiUrlsService) {
		this.$http = $http
		this.apiUrlsService = apiUrlsService
		this.getAll()
			.then(data => {
				console.log(data)
				this.items = data
			})
	}

	getAll() {
		return this.$http.get(this.apiUrlsService.item)
			.then((result) => {
				return (result.data)
			})
	}

	getItemById(idItem) {
		return this.items.find(i => i.id == idItem)
	}

	getItemsByType(type) {
		if (this.items) {
			return this.items.filter(i => i.type == type)
		}
	}
}