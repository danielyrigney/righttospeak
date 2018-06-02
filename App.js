import React, { Component } from 'react';
import { View } from 'react-native';

import MainView from './components/MainView';

export default class App extends Component {
  render() {
    return (
      <View>
        <MainView />
      </View>
    );
  }
}