import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../user/authentication/authentication';
import { Redirect } from 'react-router';
export default function LoginComponent(props){
    let [username,setUsername] = useState('')
    let [password,setPassword] = useState('')
    let [loggedIn,setLoggedIn] = useState(false)

    let propertyToSetter = {
        username:setUsername,
        password:setPassword
    }

    function handleOnChange(e){
        let text = e.target.value
        propertyToSetter[e.target.name](text)
    }
    async function handleOnSubmit(e){
        //user login code
        let loginResponse = await loginUser(username,password)
        if(loginResponse.error){
            alert("Invalid Credentials")
        }
        else{
            alert("Successfully Logged In!")
            setLoggedIn(true)
        }
    }

    return(
        <div className="card col-8">
            <h3>
                Login
            </h3>
            <form>
                <div className="form-group">
                
                    <label>
                        Email Id
                    </label>
                    <input type="email" onChange={handleOnChange} name ="username" className="form-control" placeholder="Enter email" value={username}>
                    </input>
                </div>

                <div className="form-group">
                    
                    <label>
                        Password
                    </label>
                    <input type="password" onChange={handleOnChange} name="password" className="form-control" placeholder="Enter Password" value={password}>
                    </input>
                </div>
                <button  className="btn btn-primary" onClick={(e)=>{e.preventDefault();handleOnSubmit(e)}} >
                    Login
                </button>
                {
                    
                    loggedIn&&<Redirect to="/home"/>
                }
                <Link to = "/register">
                    Register
                </Link>

            </form>
        </div>
    )
}