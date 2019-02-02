import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Child1} from './Child1';
import {Child2} from './Child2';

class App extends Component {
  constructor(){
    super();
    this.flag = false;
    this.state = {flag:this.flag};
  }
  toggle(){
    this.flag = !this.flag;
      this.setState({flag:this.flag},()=>{
        console.log("Flag Updated....");
      });
  }
  render() {
    return (
     <div>
       <button onClick={this.toggle.bind(this)}>Flag</button>
       {this.state.flag?<Child1/>:<Child2/>}
      
     </div>
    );
  }
}

export default App;
