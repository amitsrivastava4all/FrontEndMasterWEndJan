var r:string[]  = [];
var r1:[number, string, boolean] = [1001, "Ram",true];
function errorFn():never{
    throw new Error("Some Error Occur");
}

function db(){
    var con= "Connection Created"
    if(con=='Connection Created'){

    }
    else{
        errorFn();
    }
}

interface MyFunctionStruct{
    (x:number, y:number):number;
}
var addition:MyFunctionStruct = (a?:number, y?:number)=>{
    if(a && y){
    return a + y;
    }
    else{
        return 0;
    }
}
var addition2:MyFunctionStruct = ()=>{
    return 1000;
    //console.log("Addition 2");
}
//addition2();
interface MyType{
    name:string;
    id:number;
    salary:number;
}
var t3:MyType = {name:'Ram',id:1001, salary:8888};
var t4:{id:number, name:string} = {id:1001, name:'Ram'};
type MyNewType = {id:number , name:string};
var t6:MyNewType = {id:1001 , name:'Ram'};

 interface Player{
     jump():void;
     walk():void;

    }
    interface StarPlayer{
        hide():void;
    }
    interface HybridPlayer extends Player, StarPlayer{

    }
    class RedPlayer implements Player{
        jump():void{
            console.log("Red Player Jump High")
        }
        walk():void{
            console.log("Red Player Walk Fast");
        }
    }
    class YellowPlayer implements Player{
        jump():void{
            console.log("Red Player Jump Low")
        }
        walk():void{
            console.log("Red Player Walk Low");
        }
    }
    var player:Player = new RedPlayer();
    player.jump();
    player.walk();
abstract class Loan{
    protected amount:number;
    constructor(){
        this.amount = 1000;
    }
    abstract emi():void;
}
class AutoLoan extends Loan{
    emi():void{

    }
    
}
class HomeLoan extends Loan{
emi():void{

}
}
//var fiveYearLoan:HomeLoan = new HomeLoan();
//var fiveYearLoan:Loan = new HomeLoan();  // Upcasting
//var fiveYearLoan:Loan = new Loan();


var t:number =100;
var x:string = "AMIT";
var z:boolean = true;
var b:any  = 100;
b = 'hello';
var w:string|number= 100;
w = 'Amit';
var g:string[] = [];
var t1 = new Array<string>();
t1.push("amit");
class A1{
    //private id:number
    static count:number;
    private name:string;
    private readonly pf:number = 1000;
    hra:number = 0;
    constructor( private id:number, name:string,public salary:number, protected bonus:number){
        this.name = name;
        A1.count++;
        //this.id = id;
    }
    public print():void{
        console.log('Id is '+this.id);
        console.log('Name is '+this.name);
    }
     disp():void{
    console.log("A1 Disp Call");
    }
}
class A2 extends A1{
constructor(){
    super(1001, 'Ram',9000,900);
}
output():void{
    console.log("Output call");
}
print():void{
    super.print();
    console.log("A2 Print Call ");
}
}
var a2:A1 = new A2();
a2.print();
a2.disp();
if(a2 instanceof A2){
 let a3:A2 = a2 as A2;
    a3.output();
}
function print():void{
    console.log("I am Print");
}
function show():number|string{
    return 10;
}
function add(x:number,y:number):number{
    return x + y;
}
add(100,200);

//w = true;
//t='amit';
console.log('t is ',t);