import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);   
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);   
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
     
    return (

        <div>
            {!editMode &&
                <div className={s.profileStatus}>
                   <b>Status: </b><span onDoubleClick = {activateEditMode}>{props.status || "----"} </span>
                </div>
            }       
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
                </div>
            }
        </div>
        )
    }
export default ProfileStatusWithHook;