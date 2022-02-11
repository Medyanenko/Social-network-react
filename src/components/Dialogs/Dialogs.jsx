import React from "react";
import {NavLink} from "react-router-dom"
import s from "./Dialogs.module.css"

const DialogItem = (props) => {
    let path = "dialog/" + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Tanya'},
        {id: 2, name: 'Vadym'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Max'},
    ]
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData.name} id={dialogsData.id}/>
                <DialogItem name="Vadym" id="2"/>
                <DialogItem name="Mariia" id="3"/>
                <DialogItem name="Max" id="4"/>
            </div>
            <div className={s.messages}>
               <Message message="dawrwt"/>
               <Message message="sagyw"/>
               <Message message="sahy"/>
               <Message message="asghyw"/>  
            </div>
        </div>
    )
}

export default Dialogs;