const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  dialogs: [{
      id: 1,
      name: "Boya",
      avatar: "https://vyazanoe-tvorchestvo.ru/wp-content/uploads/2020/07/JSOwXpwrSY0.jpg"
    },
    {
      id: 2,
      name: "Rrrr",
      avatar: "https://images.deal.by/86699515_86699515.jpg?PIMAGE_ID=86699515"
    },
    {
      id: 3,
      name: "Baba",
      avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%90%D0%BC%D0%B0%D0%B9%D1%8F%20(%D0%90%D0%BB%D0%B5%D1%82%D1%82).jpg"
    },
    {
      id: 4,
      name: "Kaya",
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
  ]
}

const DialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = action.newMessageText;

      return {
        ...state,
        newMessageText: '',
          messages: [...state.messages, {
            id: 6,
            message: body
          }]
      };
    default:
      return state;
  }
}

export const addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText
});

export default DialogsReducer;