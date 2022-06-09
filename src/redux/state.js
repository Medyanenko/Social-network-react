let renderEntireTree = () => {
}

let state = {
    profilePage : {
        posts : [
            {id: 1, message: 'Hi', like: '15'},
            {id: 2, message: 'Hola', like: '20'}
          ],
        newPostText : "5000$"
    },
    dialogsPage : {
        dialogs : [
            { id: 1, name: "Tanya", avatar: "https://vyazanoe-tvorchestvo.ru/wp-content/uploads/2020/07/JSOwXpwrSY0.jpg"},
            { id: 2, name: "Vadym", avatar: "https://images.deal.by/86699515_86699515.jpg?PIMAGE_ID=86699515"},
            { id: 3, name: "Masha", avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%90%D0%BC%D0%B0%D0%B9%D1%8F%20(%D0%90%D0%BB%D0%B5%D1%82%D1%82).jpg" },
            { id: 4, name: "Max", avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%93%D1%80%D0%B5%D0%B3%20(%D0%93%D0%B5%D0%BA%D0%BA%D0%BE).jpg" },
          ],
        messages : [
            { id: 1, message: "dawrwt" },
            { id: 2, message: "sagyw" },
            { id: 3, message: "sahy" },
            { id: 4, message: "adsghyw" },
          ],
        newMessageText : "8000$"
    },
    sidebar : [
      { id: 1, name: "Tanya", avatar: "https://vyazanoe-tvorchestvo.ru/wp-content/uploads/2020/07/JSOwXpwrSY0.jpg"},
      { id: 2, name: "Vadym", avatar: "https://images.deal.by/86699515_86699515.jpg?PIMAGE_ID=86699515"},
      { id: 3, name: "Masha", avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%90%D0%BC%D0%B0%D0%B9%D1%8F%20(%D0%90%D0%BB%D0%B5%D1%82%D1%82).jpg" },
      { id: 4, name: "Max", avatar: "http://игрушечный-рай.рф/img/cms/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/%D0%93%D0%B5%D1%80%D0%BE%D0%B8%20%D0%B2%20%D0%BC%D0%B0%D1%81%D0%BA%D0%B0%D1%85/%D0%93%D1%80%D0%B5%D0%B3%20(%D0%93%D0%B5%D0%BA%D0%BA%D0%BE).jpg" }
  ]
}
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText ='';
  renderEntireTree(state);
}

export const updateNewPostText = (newPost) => {
  state.profilePage.newPostText = newPost;
  renderEntireTree(state);
  
}

export const addMessage = () => {
  let newMesage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMesage);
  state.dialogsPage.newMessageText ='';
  renderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  renderEntireTree(state);  
}
export const subscribe = (observer) =>{
  renderEntireTree = observer;
}
export default state;