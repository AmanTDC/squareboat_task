import axios from "axios";
import { API_BASE_URL } from "../constants/API_BASE";

async function getRequest(endpoint,queryParams){
    try{
        
        let getResponse = await axios.get(
            API_BASE_URL+endpoint+queryParams,{withCredentials:true}
        )
        return getResponse.data
    }catch(err){
        if(err.errorCode==401){
            return {redirect:"http://localhost:3000/login"}
        }
    }
    
}
async function postRequest(endpoint,body){
    try{
        let postResponse = await axios.post(
            API_BASE_URL+endpoint,body,{withCredentials:true}
        )
        return postResponse.data
    }catch(err){
        if(err.errorCode==401){
            return {redirect:"http://localhost:3000/login"}
        }
    }
}

export {
    postRequest,
    getRequest
}