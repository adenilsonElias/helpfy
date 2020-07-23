/**
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/screens/App';
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import store from './src/store/store'
import {createPost} from  './src/firebase/Post'
import Post from './src/model/post_model';

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName,() => Redux);
