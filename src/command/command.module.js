import ItemService from "../item/item.service"
import ApiUrlsService from "../apiUrls/apiUrls.service"

const commandModule = angular
    .module('commandModule', [])
    .service('itemService', ItemService)
    .value('apiUrlsService', ApiUrlsService)

export default commandModule