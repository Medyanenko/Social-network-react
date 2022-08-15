import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from "./../../../assets/img/user.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if(!profile){
    return <Preloader/>
  }

  const  onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  return (
    <div >
      <div className={s.descriptionBlock}>
      <div >
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
        {isOwner && <input type = {"file"}  onChange = {onMainPhotoSelected}/>}
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
