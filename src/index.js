//react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//redux
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const bookStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={bookStore}>
    <Router>
<App />
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();