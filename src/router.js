import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import { AppRegistry } from 'react-native'
import Login from './loginPage/index'
import List from './listPage/index'

const Router = StackNavigator({
  Login: { screen: Login },
  List: { screen: List },
});

export default Router;

AppRegistry.registerComponent('Router', () => Router);
