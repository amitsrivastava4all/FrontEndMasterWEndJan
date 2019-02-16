import React from 'react';
import {NavLink,Route} from 'react-router-dom';
import {Office} from './Office';
export const Contact=(props)=>{
    return (
    <div>
    <h1>I am Contact</h1>
    <NavLink to="/contact/office">Office</NavLink>
        <br/>
        <NavLink to="/contact/res">Res</NavLink>
        <br/>
        <hr/>
        <Route path="/contact/office" component={Office}></Route>
        
        <Route path="/contact/res" render={()=>{
            return (<h2>I am Res</h2>)
        }}></Route>
        </div>
    )
}