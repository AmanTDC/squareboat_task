import React from "react";
// import { connect } from "../../../../../backend/app/routes/users";
// import { User } from "../../../../../backend/app/models/User";
import {connect} from 'react-redux'
function PostingBoxComponent(props){
    let user = {
        name:"Aman Gupta",
        username:"aman2612"
    }
    return(
        <div className="p-3 m-2 w-100 card text-left">
            <h4>
                {user.name}
            </h4>
            <h5>
                @{user.username}
            </h5>
            <form>
                <input type="textArea" className="form-control"/>
                <button className="btn btn-primary">
                    Post
                </button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        user:state.user
    }
}
function mapDispatchToProps(dispatch){

}
export default connect(mapStateToProps,mapDispatchToProps)(PostingBoxComponent)