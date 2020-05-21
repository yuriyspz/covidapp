import React from 'react';
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducers";
import WorldCountiesList from "./components/worldCountriesList"


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default function App() {
    return (
        <Provider store={store}>
            <WorldCountiesList/>
        </Provider>
    );
}
