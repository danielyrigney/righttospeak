import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ButtonView from '../ButtonView';

export default class Body extends Component {
  updateDisplayText = (phrase) => {
    this.props.updateDisplayText(phrase);
  }

  render() {
    return (
      <View style={styles.container}>
        <ButtonView updateDisplayText={this.updateDisplayText} />
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
