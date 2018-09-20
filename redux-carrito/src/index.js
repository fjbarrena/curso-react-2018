import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import reducers from './reducers/reducers';

const initialState = {
    articles: [
        {name: "MacBook Pro 15'", price: 3000},
        {name: "MacBook Pro 16'", price: 2000},
        {name: "MacBook Pro 17'", price: 3000},
        {name: "MacBook Pro 18'", price: 5000},
        {name: "MacBook Pro 19'", price: 7000}
    ]
}

const store = createStore(reducers, initialState);

export default store;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
