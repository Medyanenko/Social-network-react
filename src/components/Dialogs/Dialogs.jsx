import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator} from '../../redux/state';
import {updateMessageActionCreator} from '../../redux/state';

const Dialogs = (props) => {
 
  let dialogsElements = props.state.dialogs.map((d, id) => <DialogItem key={id} name={d.name} avatar={d.avatar} id={d.id} />);
  let messagesElements = props.state.messages.map((m, id) => <Message key={id} message={m.message} />);
  
  let newMessageElement = React.createRef();

  let addMessage = () =>{
    props.dispatch(addMessageActionCreator());
  }
  let onMessageChange = () =>{
    let text = newMessageElement.current.value;
    props.dispatch(updateMessageActionCreator(text));  
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
          <textarea onChange={onMessageChange} ref = {newMessageElement} value={props.state.newMessageText}/>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
