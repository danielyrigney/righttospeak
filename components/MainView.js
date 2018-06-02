import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from './HeaderBar.js';
import Body from './Body.js';

export default class MainView extends Component {
  render() {
    return (
      <View>
        <HeaderBar/>
        <Body />
      </View>
    );
  }
}
