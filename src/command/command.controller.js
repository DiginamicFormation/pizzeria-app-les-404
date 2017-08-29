


export default class CommandCtrl {

    constructor(itemService, CommandService){
       this.commandService = CommandService;
        this.itemService = itemService;
        this.itemList; //it will be send to create the command
        
    }


addItem(idItem, quantity){


    let i=0;
    if (i<quantity){
    while (i<quantity){
    this.itemList.push(idItem)
    i++;
}}
    else if (i>quantity){
         while (quantity<i){
    this.itemList.splice(idItem)
    i--;
    }}

    calculs ();
}

countElem(idItem){
    
  this.itemList.forEach((item) => {
      let i = 0;
    if (item == idItem) {
        i++;
    }
    return i;
  })
}
//remove item(s) from basket (localStorage)
removeItem(idItem) {
  
    let i = countElem(idItem);
    let x = 0;
    while (x<i){
    let ind = this.itemList.indexOf(idItem);
    this.itemList.splice(ind)
    x++;
    }

calculs ();
} 




calculs(){

this.total = 0;

    this.itemList.forEach((item)=>{
       total = total + this.itemService.getItemById(item).price;
    })

this.promotion = 0.1 * this.total
this.paye = this.total - this.promotion

}


passCommande(idUser){
//redirection
// /commande

//create current in command service
commandService.createCommand();

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
