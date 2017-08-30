export default class ItemService {
    constructor($http, apiUrlsService) {
        this.$http = $http
        this.apiUrlsService = apiUrlsService
        this.items = []
    }

    getAllItems() {
        if (this.items.length === 0) {
            this.$http.get(this.apiUrlsService.item)
                .then((result) => {
                    this.items = (result.data)
                })
        }
    }

    getItemById(idItem) {
        return this.items.find(i => i.id == idItem)
    }

    getItemsByType(type) {
        return this.items.filter(i => i.type == type)
    }
}