import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './container/Login';
import { Header } from './uicomponents/header';
import {View} from './uicomponents/view';

class App extends Component {
  constructor(){
    super();
    this.state  = {flag:false,role:'G'};
  }
  isLogin(flag,role){
    this.setState({flag:flag,role:role});
  }
  render() {
    var dashboard = (<div>
      <Header role={this.state.role}/>
      <br/>
      <hr/>
      <View/>
      <h3>I am Footer....</h3>
      </div>);
    return (
       <div>
       {this.state.flag?dashboard:<Login isLogin={this.isLogin.bind(this)}/>}
       </div>
    );
  }
}

export default App;
