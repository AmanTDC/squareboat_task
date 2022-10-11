import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../user/authentication/authentication';
import { Redirect } from 'react-router';
export default function RegistrationComponent(props){
    let [username,setUserName] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [name,setName] = useState('')
    let [registered,setRegistered] = useState(false)

    let propertyToSetter = {
        name : setName,
        email: setEmail,
        password:setPassword,
        username:setUserName
    }

    function handleOnChange(e){
        let text = e.target.value
        propertyToSetter[e.target.name](text)
    }
    async function handleOnSubmit(e){
        let response = await registerUser({
            username,
            email,
            name,
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
        <div className="card col-8">

            <form>
            <h3>
                Register
            </h3>
                <div className="form-group">
                    
                    <label>
                        Name
                    </label>
                    <input type="text" name="name" onChange={handleOnChange} className="form-control" placeholder="Enter Full Name" value={name}>
                    </input>
                </div>
                <div className="form-group">
                
                    <label>
                        Email Id
                    
                    
                    </label>
                    <input type="email" name="email" onChange={handleOnChange} className="form-control" placeholder="Enter email" value={email}>
                    </input>
                </div>
                <div className="form-group">
                
                    <label>
                        Username
                    </label>
                    <input type="text" name="username" onChange={handleOnChange} className="form-control" placeholder="Enter Username" value={username}>
                    </input>
                </div>

                <div className="form-group">
                    
                    <label>
                        Password
                    </label>
                    <input type="password" name="password" onChange={handleOnChange} className="form-control" placeholder="Enter Password" value={password}>
                    </input>
                </div>
                
                
                <button  className="btn btn-primary" onClick={(e)=>{e.preventDefault();handleOnSubmit(e)}} >
                    Sign Up
                </button>
                {
                    registered&&<Redirect to = "/login"/>
                }
                <Link to="/login">
                    Login
                </Link>

            </form>
        </div>
    )
}