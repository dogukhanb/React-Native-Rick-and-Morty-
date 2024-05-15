//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

// create a component
const MyComponent = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>

      
    </Provider>

  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;
