import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {addPost}from './redux/state';
import {updateNewPostText} from './redux/state';
import {addMessage}from './redux/state';
import {updateNewMessageText} from './redux/state';
import {subscribe}from './redux/state';


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode> 
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
reportWebVitals();
}
renderEntireTree(state);
subscribe(renderEntireTree);


