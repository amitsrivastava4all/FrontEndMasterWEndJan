import React from 'react';
export class RefDemo extends React.Component{
    constructor(){
        super();
        this.state = {first:0, second:0,result:0}
    }
    show(){
        var firstNumber = this.refs.first.value;
        var secondNumber = this.refs.second.value;
        var result = parseInt(firstNumber) + parseInt(secondNumber);
        this.setState({first:firstNumber, second:secondNumber,result:result})


    }
    render(){
        return (
            <div>
                <input ref='first' placeholder='Type First' type="text"/>
                <input ref='second' placeholder='Type Second' type="text"/>
                <button onClick={this.show.bind(this)}>Show Result</button>
                <h2>First {this.state.first} Second {this.state.second} result {this.state.result}</h2>
            </div>
        )
    }
}