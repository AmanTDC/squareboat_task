import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import setUser from '../redux/actions/setUser';
import { getMyInfo } from '../services/apiService';
import reloadFreshStates from '../services/reloadFreshStates';
import MainPanelComponent from './MainPanelComponent';
import SidePanelComponent from './SidePanelComponent';

function HomeComponent(props){
    let [redirectToLogin,setRedirectToLogin] = useState(false)
    let [renderHome,setRenderHome] = useState(false)
    useEffect(  ()=>{
        getMyInfo().then(
            userContainer=>{
                console.log(userContainer.user)
                props.dispatch(setUser(userContainer.user))
                setRenderHome(true)    
            }
        ).catch(err=>{
            console.log(err)
            setRedirectToLogin(true)
        })
        reloadFreshStates(props.dispatch).then(d=>console.log(d)).catch(err=>console.log(err))
    },[])
    //to enhance and change
    if(renderHome)
    return(
        <div className="d-flex ">
            {
                redirectToLogin&&<Redirect to = "/login"/>
            }
            <MainPanelComponent/>
            <SidePanelComponent/>
            
            
        </div>
    )
    return <div>
        {
            redirectToLogin&&<Redirect to = "/login"/>
        }
    </div>
}
export default connect()(HomeComponent)