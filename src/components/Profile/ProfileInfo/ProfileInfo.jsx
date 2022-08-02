import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  //debugger;
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div >
      {/* <div>
        <img src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" />
      </div> */}
      <div className={s.descriptionBlock}>
      <div>
        <img src={props.profile.photos.small}/>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <ProfileStatus status={props.status}/>
      </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
