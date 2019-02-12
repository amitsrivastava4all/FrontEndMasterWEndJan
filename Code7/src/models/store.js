import {createStore,applyMiddleware} from 'redux';
import {calcReducer} from './reducer';
import thunk from 'redux-thunk';
export const store = createStore(calcReducer,applyMiddleware(thunk));
store.subscribe(()=>{
    console.log("Store is Subscribed .....");
})