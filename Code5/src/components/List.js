import React from 'react';
import {Item} from './Item';
export const List = (props)=>{
    return(

       <>
        <table className='table table-bordered'>
                {props.items.map(itemObject=>{
                    return <Item key={itemObject.id} items={itemObject}/>
                })}
        </table>
       </>
    )
}