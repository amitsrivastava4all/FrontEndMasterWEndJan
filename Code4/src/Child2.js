import React from 'react';
import axios from 'axios';
export class Child2 extends React.Component{
    constructor(){
        super();
        console.log("Child2 Constructor call");
    }
    componentWillMount(){
        console.log("Child2 Before Render Call");
    }
    componentDidMount(){
        console.log("Child2 After Render Call");
    }
    componentWillUnmount(){
        console.log("Child2 UnMount")
    }
    callServer(){
        axios.get('/mobiles.json').then(data=>{
            console.log("Data is ",data.data['mobiles']);
        }).catch(e=>{
            console.log("Error is ",e);
        })
    }
    render(){
        console.log("Child2 render call");
        return (
            <div>
                <button onClick={this.callServer.bind(this)}>Child2 Ajax </button>
            </div>
        )
    }
}