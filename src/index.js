import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import store from './redux/state';
import store from './redux/redux-store';

let rerenderEntireTree = (state) => {
  //debugger;
    ReactDOM.render( 
        <React.StrictMode> 
          <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
reportWebVitals();
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state);
});


