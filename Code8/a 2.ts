var a:number =100;
var e :string = 'AMIT';
var y:boolean = true;
var g3;
var g4 = 10000;
g4 = null;
//g3 = 1000;
var g1:any ;
g1 = 100;
g1 = "hello";
var g2:number|string = 1000;
//g2 = true;
//g2 = true;
type myType = {name:string, id:number, salary:number};
var obj:myType = {name:"Ram",id:1001, salary:9999} ;

function test(){
    console.log(" i am test ");
}
//homevar ww = test;
var myFnType:(a:number, b:number)=>number;
//myFnType = test;

// var obj:{name:string, id:number, salary:number} ={name:"Ram",id:1001, salary:9999} ;


var e1:number[]= [100,200,300];
function add(x:number, y:number):number{
    return x + y;
}
myFnType = add;
var m:number = add(100,299);

//y =1000;
console.log("A is ",a);
//a = "Hello";
console.log("A is ",a);

class A{
    private id:number;
    constructor(id:number,private _name:string,protected salary:number, public bonus:number){
        this.id = id;
    }
    public set name(tempName:string){
        console.log("Set Name is ",tempName.trim().length);
        if(tempName.trim().length==0){
            console.log("invalid name");
            return ;
        }
        this._name = tempName;
    }
    public get name():string{
        return this._name;
    }
    print():void{
        console.log(`Id is ${this.id} NAme is ${this.name}`);
    }
}
var obj1:A = new A(1001,'Ram',9999,999);
obj1.name = "   ";
//obj1._name= "Kumar";
obj1.print();