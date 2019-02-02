import React,{Component} from 'react';
import {calcOperations} from '../models/calcoperations';
import { Input } from '../components/Input';
import { Output } from '../components/Output';
import './Calc.css';
import $ from 'jquery';
export class Calc extends Component{
    constructor(){
        super(); // call parent class constructor
        this.counter=1;
        console.log("I am this....... ",this);
        this.fruits = ["Apple","Orange","Banana"];
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.result = 0;
        this.state = {result:this.result,form:[]};
    }
    takeFirstNumber(event){
        this.firstNumber = event.target.value;
        console.log("First ",this.firstNumber);
    }
    takeSecondNumber(event){
        this.secondNumber = event.target.value;
        console.log("Second ",this.secondNumber);
    }
    compute(operator){
        this.result = calcOperations[operator](this.firstNumber, this.secondNumber);
        // if(operator=='+'){
        //     this.result = calcOperations.add(this.firstNumber, this.secondNumber);
        // }
        // else
        // if(operator=='-'){
        //     this.result = calcOperations.sub(this.firstNumber, this.secondNumber);
        // }
        this.setState({result:this.result});
    }
    cases(x){
        if(x==100){
            return (
                <div>
                    <h1>I am in If 100</h1>
                    <p>I am in 100 P</p>
                </div>
            )
        }
        else
        if(x==200){
            return (
                <div>
                    <h1>I am in If 200</h1>
                    <p>I am in 200 P</p>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h1>I am in not 100 and 200</h1>
                    <p>I am in not 100 and 200 P</p>
                </div>
            )
        }
    }
    createForm(pid){
       var arr =  this.state.form;
       var txt = "Type Details of "+pid;
       $("h1").hide(1000);
        var jsx = (
            <div>
                <input type="text" id={pid} placeholder={txt}/>
            </div>
        )
        arr.push(jsx);
        this.setState({...this.state,form:arr});
    }
    render(){
        
        var x = 100;
        var mystyle = {
            backgroundColor:'green'
        }
        // Input({firstno:takeFirstNumber,secondno:takeSecondNumber})
        return (
            <div>
                <button onClick={()=>{
                    this.createForm(this.counter);
                    this.counter++;

                    }}>Add Qualification</button>
                {this.state.form.map(f=><>{f}</>)}
                {this.fruits.map(fruit=><p>{fruit}</p>)}
                {this.cases()}
                {x==100?<h1>100</h1>:<h2>0</h2>}
                <p style={mystyle}>My Style</p>
                <h1 className='red'>Calc App</h1>
                <Input operation={this.compute.bind(this)} firstno={this.takeFirstNumber.bind(this)} secondno={this.takeSecondNumber.bind(this)}/> 
                <Output total={this.state.result}/> 
            </div>
        );
    }

}