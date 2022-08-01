import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from '../../redux/dialogsReducer';
import {updateMessageActionCreator} from '../../redux/dialogsReducer';
import { connect } from "react-redux/es/exports";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from "redux"


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


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);