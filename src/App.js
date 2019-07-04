import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import LoginForm from './components/LoginForm'
import { Header } from './components/common'
import Router from './Router'


class App extends Component {

    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyAQYBe6AfMOTSgR-xY39cDPIKtPznku0Xc",
            authDomain: "manager-4c952.firebaseapp.com",
            databaseURL: "https://manager-4c952.firebaseio.com",
            projectId: "manager-4c952",
            storageBucket: "",
            messagingSenderId: "597809571272",
            appId: "1:597809571272:web:3418ff410f38b57b"
        };

        firebase.initializeApp(firebaseConfig);
    }


    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
            
                <Router />
              
            </Provider>
        )
    }
}


export default App;