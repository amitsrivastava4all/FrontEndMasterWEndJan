import React from 'react';
export class Login extends React.Component{
    constructor(props){
        super(props);

    }
    login(){
        var userid = this.refs.userid.value;
        var pwd = this.refs.pwd.value;
        if(userid==pwd){
            this.props.isLogin(true,'A');
        }
        else{
            this.props.isLogin(true,'G');
        }
    }
    render(){
        return (
            <div>
                <input ref='userid' type="text"/>
                <input ref='pwd' type="password"/>
                <button onClick={this.login.bind(this)}>Login</button>
            </div>
        )
    }
}