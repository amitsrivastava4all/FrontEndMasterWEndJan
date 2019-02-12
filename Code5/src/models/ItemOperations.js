import {URLS} from '../utils/config';
import {Item} from '../models/Item';
export const itemOperations = {
    items:[],
    fetchAndFill(fillItems){
        fetch(URLS.itemUrl).then(response=>{
            response.json().then(data=>{
                console.log("Data is ",data);
                let arr = data.mobiles;
                console.log("Arr is ",arr);
                let items = this.fillArray(arr);
                fillItems(items);
            }).catch(err=>{
                console.log("Invalid JSon ",err);
            })
        }).catch(e=>{
            console.log("Error in Server Call ",e);
        })
    },
    fillArray(arr){
       this.items =  arr.map(item=>{
            let itemObject = new Item(item.id, item.name, item.price, item.url);
            return itemObject;
        })
        return this.items;
    },
    search(){

    },
    sort(){

    }
}