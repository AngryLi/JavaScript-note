/**
 * Created by Liyazhou on 2016/12/8.
 */

var fetch = require('node-fetch');
let options = {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:{
        "access_token":"6b847aac6acf9fa4dad06bc6138b13a6",
        "datas":{
            "request":{
                "condition": {
                    "prodName": "FULIHUI_APP",
                    "key": "IOS_VERSION",
                    "envType": "STABLE"
                }
            }
        }
    }
};

let url = "http://openapi.fulihui.org/rest/propertiesService/query"

fetch(url, options)
    .then(response=>response.json())
    .then(responseText=>{
        console.log(responseText)
    })
    .catch(err=>{
        console.error(err)
    });