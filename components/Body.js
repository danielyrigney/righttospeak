import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import GridOfButtons from './GridOfButtons';

export default class Body extends Component {
  render() {

    const editMode = () => (
      <View style={styles.container}>
        <GridOfButtons
          buttons={this.props.buttons}
          isEditingButton={this.props.isEditingButton}
          launchEditButtonModal={this.props.launchEditButtonModal}
        />
      </View>
    );

    const viewMode = () => (
      <View style={styles.container}>
        <GridOfButtons
          buttons={this.props.buttons}
          isEditingButton={this.props.isEditingButton}
          updateDisplayText={this.props.updateDisplayText}
        />
      </View>
    );

    return this.props.isEditingButton ? editMode() : viewMode();
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
