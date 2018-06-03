import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Expo from 'expo';

import MainView from './components/MainView';
import buttons from './data/buttons';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: '',
      isEditingButton: false
    };
  }

  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
  }

  componentWillUnmount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);

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

  toggleEditButton = () => {
    this.setState({
      ...this.state,
      isEditingButton: !this.state.isEditingButton
    });
  }

  launchEditButtonModal = () => {
  }
  
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <MainView
          clearDisplayText={this.clearDisplayText}
          updateDisplayText={this.updateDisplayText}
          toggleEditButton={this.toggleEditButton}
          launchEditButtonModal={this.launchEditButtonModal}
          isEditingButton={this.state.isEditingButton}
          displayText={this.state.displayText}
          buttons={buttons} />
      </View>
    );
  }
}
