import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import SidebarReducer from "./sidebarReducer";


let store = {
  _state: {
    profilePage: {
      posts: [{
          id: 1,
          message: 'Hi',
          like: '15'
        },
        {
          id: 2,
          message: 'Hola',
          like: '20'
        }
      ],
      newPostText: "5000$"
    },
    dialogsPage: {
      dialogs: [{
          id: 1,
          name: "Tanya",
          avatar: "https://vyazanoe-tvorchestvo.ru/wp-content/uploads/2020/07/JSOwXpwrSY0.jpg"
        },
        {
          id: 2,
          name: "Vadym",
          avatar: "https://images.deal.by/86699515_86699515.jpg?PIMAGE_ID=86699515"
        },
        {
          id: 3,
          name: "Masha",
          avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%90%D0%BC%D0%B0%D0%B9%D1%8F%20(%D0%90%D0%BB%D0%B5%D1%82%D1%82).jpg"
        },
        {
          id: 4,
          name: "Max",
          avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%93%D1%80%D0%B5%D0%B3%20(%D0%93%D0%B5%D0%BA%D0%BA%D0%BE).jpg"
        },
      ],
      messages: [{
          id: 1,
          message: "dawrwt"
        },
        {
          id: 2,
          message: "sagyw"
        },
        {
          id: 3,
          message: "sahy"
        },
        {
          id: 4,
          message: "adsghyw"
        },
      ],
      newMessageText: ""
    },
    sidebar: [{
        id: 1,
        name: "Tanya",
        avatar: "https://vyazanoe-tvorchestvo.ru/wp-content/uploads/2020/07/JSOwXpwrSY0.jpg"
      },
      {
        id: 2,
        name: "Vadym",
        avatar: "https://images.deal.by/86699515_86699515.jpg?PIMAGE_ID=86699515"
      },
      {
        id: 3,
        name: "Masha",
        avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%90%D0%BC%D0%B0%D0%B9%D1%8F%20(%D0%90%D0%BB%D0%B5%D1%82%D1%82).jpg"
      },
      {
        id: 4,
        name: "Max",
        avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%93%D1%80%D0%B5%D0%B3%20(%D0%93%D0%B5%D0%BA%D0%BA%D0%BE).jpg"
      }
    ]
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = SidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
  //action - object, type - text
}
export default store;
window.store = store;