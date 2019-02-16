import React from 'react';
import {NavLink,Route} from 'react-router-dom';
import {Office} from './Office';
export const About=(props)=>{
    console.log("Props ",props);
    return (<div>
        <h1>I am About {props.match.params.name} {props.match.params.city}</h1>
        
        </div>
        )
}