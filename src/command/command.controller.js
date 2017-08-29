


export default class CommandCtrl {

    constructor(itemService, CommandService){
        this.commandService = CommandService;
        this.itemService = itemService;
        this.storage = localStorage;
        this.itemList; //it will be send to create the command
        


        //initialization of panier
        this.panier = {
            "items" : [
                {
                    item: this.itemService.getItemById("1"),
                    quantity: 4
                },
                 {
                    item: this.itemService.getItemById("2"),
                    quantity: 2
                },
            ]
        }

        this.storage.setItem("panier", JSON.stringify(this.panier))


    }



//getPanier
getPanier(){
        JSON.parse(this.storage.getItem("panier"))
}


refresh(){
 this.storage.setItem("panier", JSON.stringify(this.panier))
    calculs ();
}

//add item to panier
addItem(idItem, quantity){
    this.panier.items.push({id: idItem,  quantity: quantity})
   refresh();
}

//change the quantity!!!!!
changeQuantity(idItem, quantity){
    removeItem(idItem);
    addItem(idItem, quantity);
    
}

//remove item(s) from basket (localStorage)!!!!
removeItem(idItem) {
    this.panier.items = this.panier.items.filter((element)=>{
        return element.id == idItem;
    })
   refresh();
} 




calculs(){

this.total = 0;

    this.panier.items.forEach((item)=>{
        let price = this.itemService.getItemById(item.id).price
        for (i=0; i<item.quantity; i++){  
        total = total + price;
    }})

this.promotion = 0.1 * this.total
this.paye = this.total - this.promotion

}


passCommande(idUser){
//redirection
// /commande

//create current in command service

commandService.createCommand(idUser, createList());

}

 

createList(){
for(var key in localStorage){
for (i=0; i<storage.getItem(key); i++){
this.itemList.push(key);
}
}}







modifyCommande(){
//redirect
    ///pannier
}

confirmCommande(){
//redirect??
//put
commandService.finalizeCommand();
}

}
