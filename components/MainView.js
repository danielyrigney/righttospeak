import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight || 20;

import HeaderBar from './HeaderBar.js';
import Body from './Body.js';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: ''
    };
  }

  clearDisplayText = () => {
    this.setState({
      ...this.state,
      displayText: ''
    })
  }

  updateDisplayText = (text) => {
    this.setState({
      ...this.state,
      displayText: this.state.displayText + ' ' + text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar displayText={this.state.displayText} clearDisplayText={this.clearDisplayText} />

        <Body updateDisplayText={this.updateDisplayText} />
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