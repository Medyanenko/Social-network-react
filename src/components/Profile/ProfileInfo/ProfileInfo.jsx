import React from "react";
import { useState } from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import ProfileDataForm from "./ProfileDataForm";
import userPhoto from "./../../../assets/img/user.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const handleSubmit = (formData, setStatus, setSubmitting, goToViewMode, setFieldValue) => {
    saveProfile(formData, setStatus, setSubmitting, goToViewMode, setFieldValue);
    setEditMode(false);
  };
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div>
          <img
            src={profile.photos.large || userPhoto}
            className={s.mainPhoto}
          />
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          {editMode ? (
            <ProfileDataForm profile={profile} handleSubmit={handleSubmit}/>
          ) : (
            <ProfileData
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={profile}
              isOwner={isOwner}
            />
          )}
          <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div className={s.fullName}>{profile.fullName}</div>
      <div className={s.lookingForAJob}>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skill</b>
          {profile.lookingForAJobDescription}
        </div>
      )}
      <div className={s.aboutMe}>
        <b>About me: </b>
        {profile.aboutMe}
      </div>
      <div className={s.contacts}>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact key = {key} contactTitle={key} contactValue={profile.contacts[key]} />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      {contactTitle}:{contactValue}
    </div>
  );
};

export default ProfileInfo;
