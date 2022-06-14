import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from '../../redux/dialogsReducer';
import {updateMessageActionCreator} from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () =>{
    props.store.dispatch(addMessageActionCreator());
  }
  let onMessageChange = (messageText) =>{ 
    props.store.dispatch(updateMessageActionCreator(messageText));  
  }
  
  return (

    <Dialogs addMessage={addMessage} 
    updateMessage={onMessageChange}
    dialogsPage = {state}/>
  );
};

export default DialogsContainer;
