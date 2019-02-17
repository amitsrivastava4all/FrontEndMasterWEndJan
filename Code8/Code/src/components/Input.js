import React from 'react';
export const Input = (props)=>{
    return (
        <>
        <input onChange={(e)=>{
            props.takeInput('first',e.target.value);
        }}  placeholder="First Number" type="text"/>
        <input onChange={(e)=>{
            props.takeInput('second',e.target.value);
        }} placeholder="Second Number" type="text"/>
        <br/>
        <button  onClick={()=>{
            props.opr('+')
            }}>+</button>
        <button onClick={()=>{
            props.opr('-')
            }}>-</button>
        <button onClick={()=>{
            props.opr('*')
            }}>*</button>
        <button onClick={()=>{
            props.opr('/')
            }}>/</button>
        </>
    )
}