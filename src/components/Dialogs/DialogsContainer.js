import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from '../../redux/dialogsReducer';
import {updateMessageActionCreator} from '../../redux/dialogsReducer';
import { connect } from "react-redux/es/exports";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
