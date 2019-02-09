import {createStore} from 'redux';
import {calcReducer} from './reducer';
export const store = createStore(calcReducer);
store.subscribe(()=>{
    console.log("Store is Subscribed .....");
})