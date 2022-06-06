import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: "Tanya" },
  { id: 2, name: "Vadym" },
  { id: 3, name: "Masha" },
  { id: 4, name: "Max" },
];
let messages = [
  { id: 1, message: "dawrwt" },
  { id: 2, message: "sagyw" },
  { id: 3, message: "sahy" },
  { id: 4, message: "adsghyw" },
];
let posts = [
  {id: 1, message: 'Hi', like: '15'},
  {id: 2, message: 'Hola', like: '20'}
];
ReactDOM.render(
  <React.StrictMode> 
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
