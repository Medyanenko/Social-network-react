const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [ //{id: 1, photoUrl: 'https://vyazanoe-tvorchestvo.ru/wp-content/uploads/2020/07/JSOwXpwrSY0.jpg', followed: true, fullName: 'Tanya K', status: 'I am a front-end developer', location: {city: 'Vienna', country: 'Austria'}},
             //{id: 2, photoUrl: 'https://images.deal.by/86699515_86699515.jpg?PIMAGE_ID=86699515', followed: false, fullName: 'Vadym K', status: 'I am a boss', location: {city: 'Vienna', country: 'Austria'}},
             //{id: 3, photoUrl: 'http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%90%D0%BC%D0%B0%D0%B9%D1%8F%20(%D0%90%D0%BB%D0%B5%D1%82%D1%82).jpg', followed: false, fullName: 'Masha K', status: 'I am a Oberlaa Princess', location: {city: 'Vienna', country: 'Austria'}},
             //{id: 4, photoUrl: 'http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%93%D1%80%D0%B5%D0%B3%20(%D0%93%D0%B5%D0%BA%D0%BA%D0%BE).jpg', followed: false, fullName: 'Max K', status: 'I am a dragon', location: {city: 'Vienna', country: 'Austria'}}
           ],
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FOLLOW:
        return  {
          ...state, 
          users: state.users.map( u => {
            if(u.id === action.userId){
            return {...u, followed: true};
            }
            return u;
          })
        }

      case UNFOLLOW:
        return {
          ...state, 
          users: state.users.map( u => {
            if(u.id === action.userId){
            return {...u, followed: false};
            }
            return u;
          })
        }
      
      case SET_USERS: {
        return {...state, users: [...state.users, ...action.users]}
      }
      
      default:
        return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default UsersReducer;