import axios from 'axios';
import { API_BASE_URL } from '../../constants/API_BASE';
import { LOGIN, REGISTER } from '../../constants/API_ENDPOINTS';
import { handleLoginError } from '../../errorHandlers/loginErrorHandlers';
import { handleRegistrationError } from '../../errorHandlers/registrationErrorHandlers';
// handleLoginError
const loginURL = API_BASE_URL+LOGIN
const registerationURL = API_BASE_URL+REGISTER

async function loginUser(username,password){
    try{
        let loginResponse = await axios.post(loginURL,{
            username,
            password
        },{
            withCredentials:true
        })
        return loginResponse;
        
    }catch(err){
        return handleLoginError(err)
    }
    
    
    // console.log(loginResponse)
}

async function registerUser(user){
    try{
        let registrationResponse =  await axios.post(registerationURL,{user},{withCredentials:true})
        return registrationResponse;
    }
    catch(err){
        return handleRegistrationError(err);
    }
}

export {
    loginUser,
    registerUser
}
