import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import ButtonView from './ButtonView';
import Board from './Board';

export default class Body extends Component {
  updateDisplayText = (text) => {
    this.props.updateDisplayText(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <Board/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',

    ...Platform.select({
      ios: {
        top: 100,
        height: '80%'
      },
      android: {
        height: '200'
      },
    }),
  },

  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
