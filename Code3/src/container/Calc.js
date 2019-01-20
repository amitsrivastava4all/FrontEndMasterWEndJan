import React,{Component} from 'react';
import {calcOperations} from '../models/calcoperations';
import { Input } from '../components/Input';
import { Output } from '../components/Output';
export class Calc extends Component{
    constructor(){
        super(); // call parent class constructor
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.result = 0;
        this.state = {result:this.result};
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
    render(){
        // Input({firstno:takeFirstNumber,secondno:takeSecondNumber})
        return (
            <div>
                <h1>Calc App</h1>
                <Input operation={this.compute.bind(this)} firstno={this.takeFirstNumber.bind(this)} secondno={this.takeSecondNumber.bind(this)}/> 
                <Output total={this.state.result}/> 
            </div>
        );
    }

}