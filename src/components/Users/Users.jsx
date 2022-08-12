import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User"


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
      <div>
        {users.map((u) => (<User user={u} key={u.id} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow}/>
        ))}
      </div>
    </div>
  );
};
export default Users;
