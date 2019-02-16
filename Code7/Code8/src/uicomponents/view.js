import React from 'react';
import {Switch,Route} from 'react-router-dom';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
export const View = (props)=>{
    return (
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/about/:name/:city" component={About}></Route>
        <Route  path="/contact" component={Contact}></Route>
        <Route   render={()=>{
            return(<h2>U type something wrong in url</h2>)
            }}></Route>
        </Switch>
    )
}
