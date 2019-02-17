import React from 'react';
export const Home=(props)=>{
    var x = "/contact";
    return (
    <div>
        <button onClick={()=>{
            props.history.replace(x)
            }}>Go to Contact</button>
    <h1>I am Home</h1>
    </div>
    )
}