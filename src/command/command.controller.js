


export default class CommandCtrl {

    constructor(itemService, CommandService){
        this.commandService = CommandService;
        this.itemService = itemService;
        this.storage = localStorage;
        this.itemList; //it will be send to create the command
        
        this.itemss = {
      "id": "1",
      "type": "pizza",
      "label": "Margherita",
      "description": "Margerita pizza",
      "price": "12.00",
      "category": "veggie",
      "imageUrl": "./assets/img/pizza/margherita.jpg"
    }

    this.items2 = {
      "id": "2",
      "type": "pizza",
      "label": "4 cheese",
      "description": "4 cheese pizza",
      "price": "11.00",
      "category": "veggie",
      "imageUrl": "./assets/img/pizza/4cheese.jpg"
    }


        //initialization of panier
        this.panier = [{
                    item: this.itemss,
                    quantity: 4
                },
                 {
                    item: this.items2,
                    quantity: 2
                }]

        this.storage.setItem("panier", JSON.stringify(this.panier))

        this.calculs();
    }

getAmount() {
    
  return  createList().length;
} 

//getPanier
getPanier(){
    JSON.parse(this.storage.getItem("panier"))
}


refresh(){
 this.storage.setItem("panier", JSON.stringify(this.panier))
    this.calculs ();
}

//add item to panier
addItem(item){
    this.panier.push({item: item.item,  quantity: item.quantity})
   this.refresh();
}

//change the quantity!!!!!
changeQuantity(item){
    console.log("test", item)
        this.panier.forEach((element)=>{
        if (item.item.id == element.id){
          element.quantity = item;item.quantity;
        }
    })
   this.refresh();
    
}

//remove item(s) from basket (localStorage)!!!!
removeItem(idItem) {
    /*this.nouveauPanier = this.panier.items.filter((element)=>{
        console.log(element.item.id, idItem,element.item.id==idItem)
            return element.item.id == idItem;
    })*/
    let newPanier = [];
    this.panier.forEach(item => {
        console.log(item.item);
        if(item.item.id != idItem){
            newPanier.push(item);
        }
    })
    console.log(newPanier);
    this.panier = newPanier;
   this.refresh();
} 




calculs(){

this.total = 0;

    this.panier.forEach((element)=>{
        this.total = this.total + (element.item.price)*element.quantity
  })

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
panier.forEach((element) =>{

for(i=0; i<element.quantity; i++)
    this.itemList.push(element.item.id);
})
return this.itemList;
}





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
