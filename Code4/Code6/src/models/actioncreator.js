export const actionCreator = (first, second, operation)=>{
    return {
        payload:{first, second},type:operation
    };
}