import {actionCreator} from './actioncreator';
export function asynchDataFetch(opr){
    return dispatch=>{
        var pr = fetch('http://localhost:9999/data');
        pr.then(res=>{
            console.log("Response is ",res);
            res.json().then(data=>{
                console.log("Data Rec ",data);
                dispatch(actionCreator(data.first, data.second,opr));
            })
        }).catch(err=>{
           console.log("Error is ",err);
            // dispatch()
        })
    }
}