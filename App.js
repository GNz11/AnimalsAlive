import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Navbar from './app/components/Navbar/Navbar';
import Component1 from './app/components/Component1/Component1';
import MyPhoto from './app/components/Image/MyPhoto';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AnimalsReducer from './app/store/AnimalsReducer';

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(AnimalsReducer, middleware);

export default class MyApp extends Component {

  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Navbar />
          <MyPhoto />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    height: 640
  }
})

AppRegistry.registerComponent('MyApp', () => MyApp);
