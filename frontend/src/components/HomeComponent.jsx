import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import setUser from '../redux/actions/setUser';
import { getMyInfo } from '../services/apiService';
import MainPanelComponent from './MainPanelComponent';
import SidePanelComponent from './SidePanelComponent';

function HomeComponent(props){
    let [redirectToLogin,setRedirectToLogin] = useState(false)
    useEffect(  ()=>{
        getMyInfo().then(
            userContainer=>
            props.dispatch(setUser(userContainer.user.user))
        ).catch(err=>{
            setRedirectToLogin(true)
        })
    })
    return(
        <div className="border d-flex ">
            {
                redirectToLogin&&<Redirect to = "/login"/>
            }
            
            <MainPanelComponent/>
            <SidePanelComponent/>
        </div>
    )
}
export default connect()(HomeComponent)