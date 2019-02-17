import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
export const Header = (props)=>{
    var arr = [{name:'Home',link:'/'},{name:'About',link:'/about/Ram/Delhi'},{name:'Contact',link:'/contact'},{name:'Events',link:'/Events'}]
    var jsx =(<div></div>) ;
    if(props.role=='A'){
        jsx = (
             <div>
                 {
                     arr.map(a=>{
                         return <NavLink activeClassName="active" to={a.link}>{a.name}</NavLink>
                     })
                 }
            {/* <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about/Ram/Delhi">About</NavLink>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            <NavLink activeClassName="active" to="/Events">Events</NavLink> */}
        </div>
        )
    }
    else{
         jsx = (<div>
            <NavLink activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about/Ram/Delhi">About</NavLink>
           
        </div>);
    }
    return (
       <>
        {jsx}
        </>
    )
}