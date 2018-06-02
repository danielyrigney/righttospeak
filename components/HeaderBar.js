import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigblue}>This is the HeaderBar!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#000',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
