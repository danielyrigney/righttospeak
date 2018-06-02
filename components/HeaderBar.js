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
      backgroundColor: 'green',
      height: '20%'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
