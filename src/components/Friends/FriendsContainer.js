import Friends from "./Friends";
import { connect } from "react-redux/es/exports";

let mapStateToProps = (state) => {
  return{
    friends: state.sidebar
  }
}
let mapDispatchToProps = () => {
  return{
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
