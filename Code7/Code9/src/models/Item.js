export class Item{
    constructor(id , name, price, url){
        this.id = id;
        this.name  = name;
        this.price = price;
        this.url = url;
        this.isAdded = false;
    }
    toggleAdd(){
        this.isAdded = !this.isAdded;
    }

}