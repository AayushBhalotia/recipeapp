import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";


const store=createStore(allReducers);


ReactDom.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById("root"));