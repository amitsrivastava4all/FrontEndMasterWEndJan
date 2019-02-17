import React from 'react';
import { Input } from '../components/Input';
import  Output from '../components/Output';
import {store} from '../models/store';
import {actionCreator} from '../models/actioncreator';
import {asynchDataFetch} from '../models/asyncmiddleware';
export class Calc extends React.Component{
    constructor(){
        super();
        this.inputs = {};
        this.operation = '';
        this.flag = false;
        this.state = {show:this.flag};
    }
    takeInput(key,value){
        this.inputs[key] = value;
        console.log("Inputs are ",this.inputs);
    }
    operations(opr){
        this.flag = true;
        this.setState({flag:this.flag})
        this.operation = opr;
        console.log("Opr ",this.operation);
       // var action = actionCreator(this.inputs.first, //this.inputs.second,this.operation);
       store.dispatch(asynchDataFetch(this.operation));
        //store.dispatch(actionCreator(this.inputs.first, this.inputs.second, this.operation));
    }
    render(){
        let jsx = (<span></span>);
        if(this.state.flag){
            jsx = (<Output/>);
        }
        return (
            <div>
                <Input opr = {this.operations.bind(this)} takeInput={this.takeInput.bind(this)}/>
                {jsx}
               
            </div>
        )
    }
}