import React from 'react';
import './Item.css';
import {Cart} from './Cart';
export const Item = (props)=>{
    
    return(
       <>
        <tr key={props.items.id}>
        <td>
            {props.items.id}
        </td>
        <td>
            {props.items.name}
        </td>
        <td>
            {props.items.price}
        </td>
        <td>
            <img className='size' src={props.items.url}/>
        </td>
        <td>
            <Cart id={props.items.id}/>
        </td>
        </tr>
       </>
    )
}