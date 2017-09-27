
import HTTP from 'react-native-fetch-blob';
import qs from 'qs';

function PostReques(url, param){
    return baseHttp({
        headers: {
            'Content-Type': 'application/x-www.form-urlencoded',
        },
        body:qs.stringify(param),
        method:'POST',
        url:url,
    })
}

function GetRequest(url, param){
    return baseHttp({
        headers: {
            'Content-Type': 'application/x-www.form-urlencoded',
        },
        body:qs.stringify(param),
        method:'GET',
        url:url,
    })
}

function baseHttp(props){
    return new Promise((resolve, reject) => {
        HTTP.fetch(props.method, props.url, props.header, props.body)
        .then(res =>{
            callBack(resolve, res)
        }).catch((errorMessage)=>{
            reject({
                code:-1,
                Message:errorMessage
            });
        });
    })  
}

function callBack(resolve, res){
    if (res.data) {
        let dataSorce = JSON.parse(res.data);
        resolve(dataSorce);
    }
    
}

export default {PostReques, GetRequest};