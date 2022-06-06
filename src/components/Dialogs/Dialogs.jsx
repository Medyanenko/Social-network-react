import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
 
  let dialogsElements = props.dialogs.map((d, id) => <DialogItem key={id} name={d.name} id={d.id} />);
  let messagesElements = props.messages.map((m, id) => <Message key={id} message={m.message} />);
  
  return (
    <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
           {messagesElements}
        </div>
    </div>
  );
};

export default Dialogs;
