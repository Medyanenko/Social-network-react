import { friendsAPI } from "../api/api";

const SET_FRIENDS = "SET_FRIENDS";
let initialState = {
  friends: [
    //{
    //     id: 1,
    //     name: " Boya",
    //     avatar: "https://vyazanoe-tvorchestvo.ru/wp-content/uploads/2020/07/JSOwXpwrSY0.jpg"
    //   },
    //   {
    //     id: 2,
    //     name: " Rrrr",
    //     avatar: "https://images.deal.by/86699515_86699515.jpg?PIMAGE_ID=86699515"
    //   },
    //   {
    //     id: 3,
    //     name: " Baba",
    //     avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%90%D0%BC%D0%B0%D0%B9%D1%8F%20(%D0%90%D0%BB%D0%B5%D1%82%D1%82).jpg"
    //   },
    //   {
    //     id: 4,
    //     name: " Kaya",
    //     avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%93%D1%80%D0%B5%D0%B3%20(%D0%93%D0%B5%D0%BA%D0%BA%D0%BE).jpg"
    //   }
  ],
};

const FriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    default:
      return state;
  }
};
export const setFriends = (friends) => ({
  type: SET_FRIENDS,
  friends,
});
export const getFriends =  () => {
  return async (dispatch) => {
  let data = await friendsAPI.getFriends();
  console.log(data.items);
  dispatch(setFriends(data.items));
  }
};

export default FriendsReducer;
