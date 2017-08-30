export default class ItemsListCtrl {
	constructor(itemService, logService, $location, CommandService) {
		this.itemService = itemService
		this.logService = logService
		this.$location = $location
		this.itemType = this.$location.hash()
		this.CommandService = CommandService;

		this.itemsList = itemService.getItemsByType(this.itemType)
	}

	addToBasket(idItem, quantity = 1) {
		this.CommandService.addItem(idItem, quantity);
	}

	removeFromBasket(idItem, quantity = - 1) {
		this.CommandService.addItem(idItem, quantity);
	}
}

ItemsListCtrl.$inject = [
	'itemService',
	'logService',
	'$location',
	'CommandService'
];