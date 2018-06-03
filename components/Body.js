import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import GridOfButtons from './GridOfButtons';

export default class Body extends Component {
  updateDisplayText = (text) => {
    this.props.updateDisplayText(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <GridOfButtons
          buttons={this.props.buttons}
          updateDisplayText={this.updateDisplayText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',

    ...Platform.select({
      ios: {
        top: 10,
        height: '95%'
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
