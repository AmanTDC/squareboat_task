import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import setUser from '../redux/actions/setUser';
import { getMyInfo } from '../services/apiService';
import reloadFreshStates from '../services/reloadFreshStates';
import HeaderComponent from './HeaderComponent';
import MainPanelComponent from './MainPanelComponent';
import SidePanelComponent from './SidePanelComponent';
import './styles.css'

function HomeComponent(props){
    let [redirectToLogin,setRedirectToLogin] = useState(false)
    let [renderHome,setRenderHome] = useState(false)
    let [usingMobile,setUsingMobile] = useState(false)
    // let [loadUI,setLoadUI] = useState(false)
    useEffect(  ()=>{
        getMyInfo().then(
            userContainer=>{
                //console.log(userContainer.user)
                props.dispatch(setUser(userContainer.user))
                  
            }
        ).catch(err=>{
            //console.log(err)
            setRedirectToLogin(true)
        })
        reloadFreshStates(props.dispatch).then(res=>{setRenderHome(true)  }).catch(err=>console.log(err))
        if(window.innerHeight>window.innerWidth){
            setUsingMobile(true)
        }
    },[])
    if(renderHome)
    return(
        <div className="home-container ">
            <HeaderComponent/>
            {
                redirectToLogin&&<Redirect to = "/login"/>
            }
            <div className="home-panels">
                <MainPanelComponent usingMobile={usingMobile}/>
                <SidePanelComponent usingMobile={usingMobile}/>
            </div>
            
            
        </div>
    )
    return <div>
        {
            redirectToLogin&&<Redirect to = "/login"/>
        }
    </div>
}
export default connect()(HomeComponent)