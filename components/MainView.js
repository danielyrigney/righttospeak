import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight || 20;

import HeaderBar from './HeaderBar.js';
import Body from './Body.js';
import Footer from './Footer';

export default class MainView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar
          displayText={this.props.displayText}
          clearDisplayText={this.props.clearDisplayText}
        />

        <Body
          isEditingButton={this.props.isEditingButton}
          buttons={this.props.buttons}
          updateDisplayText={this.props.updateDisplayText}
          launchEditButtonModal={this.props.launchEditButtonModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
    // backgroundColor: 'blue',
    height: '100%',
  }
});
