import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Calc } from './container/Calc';
import {RefDemo} from './RefComp';
import { A } from './A';
import { MyHook } from './MyHook';

class App extends React.PureComponent {
  // constructor(props){
  //   super(props);
  // }
  componentDidUpdate(){

  }
  render() {
    return (
     <div>
       <p>Hook</p>
       <MyHook/>
       <br/>
       <h1>Context Demo</h1>
       <A/>
       <RefDemo/>
       <br/>
       <h2>React Redux Example {this.props.author}</h2>
       <Calc author={this.props.author}/>
     </div>
    );
  }
}

export default App;
