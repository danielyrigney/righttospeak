import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import HeaderBar from './HeaderBar.js';
import Body from './Body.js';

export default class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar style={styles.header}/>
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: '100%'
  },

  header: {
    backgroundColor: 'green',
    height: '200'
  }
});