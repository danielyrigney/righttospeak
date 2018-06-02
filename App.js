import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MainView from './components/MainView';
import buttons from './data/buttons';

export default class App extends Component {
  render() {
    return (
      <View>
        <MainView buttons={buttons} />
      </View>
    );
  }
}