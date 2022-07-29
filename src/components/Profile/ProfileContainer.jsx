import axios from "axios";
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux/es/exports";
import {getUserProfile} from "../../redux/profileReducer";
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
      this.props.getUserProfile(userId);
    }
    
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);
