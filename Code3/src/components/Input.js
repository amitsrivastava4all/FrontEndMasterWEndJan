import React from 'react';
export const Input=(props)=>{
    return (
        <div>
            <input onChange={props.firstno} placeholder='Type First Number Here' type="text"/>
            <br/>
            <input onChange={props.secondno} placeholder='Type Second Number Here' type="text"/>
            <br/>
            <button onClick={()=>{
                props.operation('add');
                }}>Add</button>
            <button onClick={()=>{
                props.operation('sub');
                }}>Subtract</button>
        </div>
    )
}