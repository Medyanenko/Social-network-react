import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from 'react-router-dom'

const Dialogs = (props) => {
  let state = props.dialogsPage;
 
  let dialogsElements = state.dialogs.map((d, id) => <DialogItem key={id} name={d.name} avatar={d.avatar} id={d.id} />);
  let messagesElements = state.messages.map((m, id) => <Message key={id} message={m.message} />);
  
  let addMessage = () =>{
    props.addMessage();
  }
  let onMessageChange = (e) =>{ 
    let messageText = e.target.value;
    props.updateMessage(messageText);  
  }

  return (
    <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
           {messagesElements}
        </div>
        <div>
        <div>
          <textarea placeholder = "Enter your message" onChange={onMessageChange} value={state.newMessageText}/>
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
