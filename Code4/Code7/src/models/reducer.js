export const calcReducer=(state = {result:0},action)=>{
    var sum = 0;
    if(action.type=='+'){
        sum = parseInt(action.payload.first) + parseInt(action.payload.second);
    }
    else
    if(action.type=='-'){
        sum = parseInt(action.payload.first) - parseInt(action.payload.second);
    }
    state = {...state, result:sum};
    return state;
}