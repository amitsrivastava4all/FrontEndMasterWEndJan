import React from 'react';
import { Input } from '../components/Input';
import  Output from '../components/Output';
import {store} from '../models/store';
import {actionCreator} from '../models/actioncreator';
export class Calc extends React.Component{
    constructor(){
        super();
        this.inputs = {};
        this.operation = '';
    }
    takeInput(key,value){
        this.inputs[key] = value;
        console.log("Inputs are ",this.inputs);
    }
    operations(opr){
        this.operation = opr;
        console.log("Opr ",this.operation);
       // var action = actionCreator(this.inputs.first, //this.inputs.second,this.operation);
        store.dispatch(actionCreator(this.inputs.first, this.inputs.second, this.operation));
    }
    render(){
        return (
            <>
                <Input opr = {this.operations.bind(this)} takeInput={this.takeInput.bind(this)}/>
                <Output/>
            </>
        )
    }
}