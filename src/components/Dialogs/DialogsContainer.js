import Dialogs from "./Dialogs";
import { addMessageActionCreator} from '../../redux/dialogsReducer';
import { connect } from "react-redux/es/exports";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose} from "redux"


let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText))
    }
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);