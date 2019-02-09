import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Calc } from './container/Calc';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <div>
       <h2>React Redux Example {this.props.author} </h2>
       <Calc author={this.props.author}/>
     </div>
    );
  }
}

export default App;
