import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Expo from 'expo';

import MainView from './components/MainView';
import buttons from './data/buttons';

export default class App extends Component {
  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
  }

  componentWillUnmount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <MainView buttons={buttons} />
      </View>
    );
  }
}
