import React from 'react';
import { Search } from '../components/Search';
import { List } from '../components/List';
import { ViewCart } from '../components/ViewCart';
import {itemOperations} from '../models/ItemOperations';
export class Shop extends React.Component{
    constructor(){
        super();
        this.state = {items:[]};
    }
    componentDidMount(){
        itemOperations.fetchAndFill(this.fillItems.bind(this));
    }
    fillItems(items){
        this.setState({items:items});
    }
    render(){
        return (
            <div className='container'>
                <h1 className='alert-info text-center'>Shop App</h1>
                <Search/>
                <ViewCart/>
                <List items = {this.state.items}/>
            </div>
        )
    }
}