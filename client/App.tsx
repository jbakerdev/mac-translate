import * as React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import appReducer from '../client/components/uiManager/UIManagerReducer'
import { Provider } from 'react-redux'
import UIStateContainer from './components/uiManager/UIStateContainer';
const thunkMiddleware = require('redux-thunk')

let store = createStore(appReducer, applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
))

export const dispatch = store.dispatch

class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <UIStateContainer />
            </Provider>
        );
    }
};

export default App