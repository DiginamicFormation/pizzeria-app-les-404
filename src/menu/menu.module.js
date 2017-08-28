import ItemService from "../item/item.service"

const menuModule = angular
    .module('menuModule', [])
    .service('itemService', ItemService)

export default menuModule