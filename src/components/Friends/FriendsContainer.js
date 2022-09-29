import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux/es/exports";
import { getAllFriends } from "../../redux/friends-selectors";
import { getFriends } from "../../redux/FriendsReducer";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
  onPageChanged = () => {
    this.props.getFriends();
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Friends friends={this.props.friends} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    friends: getAllFriends(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    getFriends,
  })
)(FriendsContainer);
