import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',

    ...Platform.select({
      ios: {
        top: 100,
        height: '20%'
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
