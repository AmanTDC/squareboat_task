import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../user/authentication/authentication';
import { Redirect } from 'react-router';
import { validateInput } from '../services/inputValidation';
import { fullNameCaseCorrected } from '../services/fullNameCaseCorrection';
export default function RegistrationComponent(props){
    let [username,setUserName] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [name,setName] = useState('')
    let [registered,setRegistered] = useState(false)

    let propertyToSetter = {
        name : setName,
        email: setEmail,
        username:setUserName,
        password:setPassword
        
    }

    function handleOnChange(e){
        let text = e.target.value
        propertyToSetter[e.target.name](text)
    }
    async function handleOnSubmit(e){
        let isValidInput = validateInput({
            name,email,username,password
        })
        if(!isValidInput)
            return false;
        let response = await registerUser({
            username,
            email,
            name:fullNameCaseCorrected(name),
            password
        })
        if(response.error){
            alert(response.errorMessageForUser);
        }
        else{
            alert("User Successfully Registered");
            setRegistered(true)
        }
    }
    return(
        <div className="card col-8 auth-card">

            <form>
            <h3 className="auth-heading">
                Register
            </h3>
                <div className="form-group auth-form-group">
                    
                    <label className="auth-label">
                        Fullname
                    </label>
                    <input type="text" name="name" onChange={handleOnChange} className="form-control auth-input" placeholder="Enter Full Name" value={name}>
                    </input>
                </div>
                <div className="form-group auth-form-group">
                
                    <label className="auth-label">
                        Email Id
                    
                    
                    </label>
                    <input type="email" name="email" onChange={handleOnChange} className="form-control" placeholder="Enter email" value={email}>
                    </input>
                </div>
                <div className="form-group auth-form-group">
                
                    <label className="auth-label">
                        Username
                    </label>
                    <input type="text" name="username" onChange={handleOnChange} className="form-control" placeholder="Enter Username" value={username}>
                    </input>
                </div>

                <div className="form-group auth-form-group">
                
                    <label className="auth-label">
                        Password
                    </label>
                    <input type="password" name="password" onChange={handleOnChange} className="form-control" placeholder="Enter Password" value={password}>
                    </input>
                </div>
                
                <div className="auth-nav">
                    <button  className="btn auth-submit btn-primary" onClick={(e)=>{e.preventDefault();handleOnSubmit(e)}} >
                        Sign Up
                    </button>
                    {
                        registered&&<Redirect to = "/login"/>
                    }
                    <Link className="auth-href" to="/login">
                        Login
                    </Link>
                </div>
                

            </form>
        </div>
    )
}