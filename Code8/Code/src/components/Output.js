import React from 'react';
import {connect} from 'react-redux';
const mapStateToProps = (state)=>{
    console.log("Now State is ",state);
    return {
        result:state.result
    }
}
const Output=(props)=>{
    return (
        <>
        <h1>Output is {props.result}</h1>
        </>
    );
}
console.log("Connect ",connect(mapStateToProps));
export default connect(mapStateToProps)(Output);
//var props = connect(mapStateToProps);
//export const compWithProps = props(Output);
/*
const Output1=(props)=>{
console.log("Result is ",props.result);
}
const mapStateToProps = (state)=>{
    console.log("Now State is ",state);
    return {
        result:state.sum
    }
}
function connect(mapStateToProps){
return function(componentName){
var props = {result :mapStateToProps({sum:1000}).result};
componentName(props);
}
}
var fn = connect(mapStateToProps);

fn(Output1);

connect(mapStateToProps)(Output1)
*/