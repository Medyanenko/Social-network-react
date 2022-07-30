import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from '../../redux/dialogsReducer';
import {updateMessageActionCreator} from '../../redux/dialogsReducer';
import { connect } from "react-redux/es/exports";

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    updateMessage: (messageText) => {
      dispatch(updateMessageActionCreator(messageText))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
