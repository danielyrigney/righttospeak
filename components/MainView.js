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

  updateDisplayText = (phrase) => {
    this.setState({
      displayText: this.state.displayText + ' ' + phrase
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar displayText={this.state.displayText}/>

        <Body updateDisplayText={this.updateDisplayText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: '100%',
  },

  header: {

  }
});