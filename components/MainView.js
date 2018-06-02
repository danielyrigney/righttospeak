import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

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

        <Body
          buttons={this.props.buttons}
          updateDisplayText={this.updateDisplayText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: '100%',
  }
});