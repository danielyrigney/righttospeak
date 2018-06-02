import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigblue}>{this.props.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',

    ...Platform.select({
      ios: {
        backgroundColor: 'red',
        top: 100,
        height: 100
      },
      android: {
        backgroundColor: 'blue',
        height: '200'
      },
    }),
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
