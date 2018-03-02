/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'; 
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import Thinker from './screens/Thinker';
import UserDetail from './screens/UserDetail';

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Thinker: {
    screen: Thinker
  },
  UserDetail: {
    screen: UserDetail,
  },
},
  {
    initialRouteName: 'Home',
  });

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

