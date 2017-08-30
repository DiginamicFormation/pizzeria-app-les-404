export default class CommandCtrl {

	constructor(itemService, CommandService) {
		this.commandService = CommandService;
		this.itemService = itemService;
		this.storage = localStorage;
		this.suggestions = [
		];//table with the suggestions
		this.itemList = [
		]; //it will be send to create the command
		this.panier = [
		];

		this.initPanier();
		this.total = this.commandService.total
		this.promotion = this.commandService.promotion
		this.paye = this.commandService.paye


		this.storage.setItem("panier", JSON.stringify(this.panier))

	}

	initPanier() {

		this.commandService.panier.forEach(element => {
			this.itemService.getItemById(element.item)
				.then(item => {
					console.log("item", item)
					if (item.price) {
						//NOT MENU
						this.panier.push(
							{imageUrl: item.imageUrl, label: item.label, price: item.price, quantity: element.quantity})
					} else {
						//MENU
						let price = 0;
						item.items.forEach(menuElement => {
							this.itemService.getItemById(menuElement)
								.then(menuItem => {
									price += parseInt(menuItem.price)
								})
						})
						this.panier.push(
							{imageUrl: item.imageUrl, label: item.label, price: price, quantity: element.quantity})
					}
				})
		});
	}

	//add item
	addItem(itemId, quantity = 1) {
		this.commandService.addItem(itemId, quantity = 1);
	}

	//getPanier
	getPanier() {
		this.panier = this.itemService.panier;
		//JSON.parse(this.storage.getItem("panier"))
	}

	//remove item(s) from basket (localStorage)!!!!
	removeItem(idItem) {
		this.commandService.removeItem(idItem)
	}

	//change the quantity!!!!!
	changeQuantity(item) {

		this.commandService.changeQuantity(item)
	}

	passCommande() {
		//create current in command service
		this.commandService.createCommand(sessionStorage.getItem("userId"));

	}

	modifyCommande() {
		//redirect
		this.$location.path("/panier")
	}

	confirmCommande() {
		//put
		this.commandService.finalizeCommand();
	}

}