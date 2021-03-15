/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './Screens/Header';
import DropDown from './Screens/DropDown';
import Splash from './Screens/Splash';
import AlbumList from './Screens/AlbumList';
import AlbumGalleryDeatils from './Screens/AlbumGalleryDeatils';
import Home from './Screens/Home';
import ApiReducer from './Store/Reducers/Apireducer';
import reduxthunk from 'redux-thunk';

import {createStore, compose, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {Provider} from 'react-redux';

import {createDrawerNavigator} from '@react-navigation/drawer';

const store = createStore(
  ApiReducer,
  composeWithDevTools(applyMiddleware(reduxthunk)),
);
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Paractice">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="AlbumList" component={AlbumList} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
