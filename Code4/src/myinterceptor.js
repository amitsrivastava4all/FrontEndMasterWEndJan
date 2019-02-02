import axios from 'axios';

export function MyInterceptor(){
    axios.interceptors.request.use(function(carryReq){
        console.log("Carry ",carryReq);
            carryReq.tokenId = localStorage.token;
            return carryReq;
    })
    //axios.interceptors.response.use()
}