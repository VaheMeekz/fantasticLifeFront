import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

// redux
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/rootReducer";

// custom imports


const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
