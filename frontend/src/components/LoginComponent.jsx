import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../user/authentication/authentication';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { validateInput } from '../services/inputValidation';
function LoginComponent(props){
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
        let isInputValid = validateInput({
            loginUsername:username,
            password
        }) 
        if(!isInputValid)
            return 
        let loginResponse = await loginUser(username,password)
        if(loginResponse.error){
            alert("Invalid Credentials")
        }
        else{
            alert("Successfully Logged In!")
            console.log(loginResponse)
            // props.dispatch({
            //     type:"SET_USER",
            //     user_id:user.user_id
            // })
            setLoggedIn(true)
        }
    }

    return(
        <div className="card col-8 auth-card">
            <h3 className="auth-heading">
                Login
            </h3>
            <form>
                <div className="form-group auth-form-group">
                
                    <label className="auth-label">
                        Email Id
                    </label>
                    <input type="email" onChange={handleOnChange} name ="username" className="form-control auth-input" placeholder="Enter email" value={username}>
                    </input>
                </div>

                <div className="form-group auth-form-group">
                    
                    <label className="auth-label">
                        Password
                    </label>
                    <input type="password" onChange={handleOnChange} name="password" className="form-control auth-input" placeholder="Enter Password" value={password}>
                    </input>
                </div>
                <div className="auth-nav">
                    <button  className="btn btn-primary auth-submit" onClick={(e)=>{e.preventDefault();handleOnSubmit(e)}} >
                        Login
                    </button>
                    {
                        
                        loggedIn&&<Redirect to="/home"/>
                    }
                    <Link className="auth-href" to = "/register">
                        Register
                    </Link>
                </div>
                

            </form>
        </div>
    )
}

export default connect()(LoginComponent)