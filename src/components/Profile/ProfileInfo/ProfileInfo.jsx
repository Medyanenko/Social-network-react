import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile){
    return <Preloader/>
  }
  return (
    <div >
      <div className={s.descriptionBlock}>
      <div >
        <img src={profile.photos.small}/>
        <div className={s.fullName}>{profile.fullName}</div>
        <div className={s.aboutMe}>{profile.aboutMe}</div>
        <div className={s.lookingForAJobDescription}>{profile.lookingForAJobDescription}</div>
        <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
      </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
