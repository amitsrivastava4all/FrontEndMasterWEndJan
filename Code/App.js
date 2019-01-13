import React from 'react';
import { First } from './components/First';
export const Application =()=>{
    var a = 10;
    var b = 20;
    var c = a + b;
    return(
        <div>
        <h1>Hello ReactJS ......</h1>
        <h2>This is Test Sum is {c}</h2>
        <First/>
        </div>
    )
}
/*export default function Application(){
    return (
        <h1>Hello React JS</h1>
    )
}*/