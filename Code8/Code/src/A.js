import React from 'react';
import { B } from './B';
import {MyContext} from './MyContext';

export class A extends React.Component{
    constructor(){
        super();
        this.state = {first:10000,second:2000,result:0};
        
    }
    addition(y){
        console.log("Y is ",y);
        this.setState({...this.state,first:y });
        return this.state.first + this.state.second;
    }
    render(){
    return (
        <div>
            <h1>A Component</h1>
            <MyContext.Provider value={{x:this.state.first,y:this.state.second,add:this.addition.bind(this)}}>
            <B/>
            </MyContext.Provider>
        </div>
    );
    }
}