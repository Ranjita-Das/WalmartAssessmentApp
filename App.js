/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';

import Router from './src/router'


export default class App extends Component<{}> {
  render() {
    return (
        <Router />
    );
  }
}
