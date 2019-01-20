import React, {Component} from 'react';
import './Calc.css';
export class Calc extends Component{
    constructor(){
        super();
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.result = 0;
        this.state = {output:0};
    }
    takeFirstNumber(event){
       // console.log("This is ",this);
        //console.log("This is ",this,"Take First Number ",event.target.value);
        this.firstNumber = event.target.value;
        
    }
    takeSecondNumber(event){
        //console.log("Take Second Number ",event.target.value);
        this.secondNumber = event.target.value;
    }
    add(){
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
        this.setState({output:this.result});
        //console.log("Add Call ",this.result);

    }
    render(){
        console.log("render call");
        return (
            <div>
              <h1>Calc App </h1>
              <input onChange={this.takeFirstNumber.bind(this)} type="text" placeholder="Type First Number"/>
              <input onChange={this.takeSecondNumber.bind(this)} type="text" placeholder="Type Second Number"/>
                <br/>
                <button onClick={this.add.bind(this)} className='button'>+</button>
                <button className='button'>-</button>
                <button className='button'>*</button>
                <button className='button'>/</button>
                <h1>Result is {this.state.output}</h1>
                </div>
          )
    }
}