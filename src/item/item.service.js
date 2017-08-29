export default class ItemService {
    constructor($http, apiUrlsService) {
        this.$http = $http
        this.apiUrlsService = apiUrlsService
    }

    getItemById(idItem) {
        return this.$http.get(this.apiUrlsService.item + "/" + idItem)
            .then((result) => {
                return (result.data)
            },
            (error) => {
                console.log(`No item found with id [${idItem}]`);
            })
    }

    getItemsByType(type) {
        return this.$http.get(this.apiUrlsService.item)
            .then((result) => {
                return result.data.filter(i => i.type === type)
            },
            (error) => {
                console.log(`No item found for type [${type}]`);
            })
    }
}