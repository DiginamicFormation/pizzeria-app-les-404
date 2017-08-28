


export default class CommandService {

    constructor(user){
        this.user = user;
        

    }


addItem(idItem, quantity){

    let i=0;
    while (i<quantity){
    this.itemsList.push(idItem)
    i++;
    }

    calculs ();
}


    //remove item(s) from basket (localStorage)
removeItem(idItem, quantity) {
  


calculs ();
} 


calculs(){

this.total = 0;

    this.itemList.forEach(()=>{

    })

this.promotion = 0.1 * this.total
this.paye = this.total - this.promotion


}

}
