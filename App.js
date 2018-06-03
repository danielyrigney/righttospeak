import React, { Component } from 'react';
import { StatusBar, View, Modal, TouchableHighlight, Text } from 'react-native';
import Expo from 'expo';

import MainView from './components/MainView';
import buttons from './data/buttons';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // View mode
      displayText: '',
      buttons: buttons,

      // Edit mode
      buttonToEdit_id: undefined,
      isEditButtonModalVisible: false
    };
  }

  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
  }

  componentWillUnmount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  // Display Text
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

  // Edit Button
  toggleEditButton = () => {
    this.setState({
      ...this.state,
      isEditingButton: !this.state.isEditingButton
    });
  }

  launchEditButtonModal = (button) => {
    this.setState({
      ...this.state,
      isEditButtonModalVisible: true
    });
  }

  setEditModalButtonVisible = (isVisible) => {
    this.setState({
      ...this.state,
      isEditButtonModalVisible: isVisible
    });
  }
  
  render() {
    if (this.state.isEditButtonModalVisible) {
      return (
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.isEditButtonModalVisible}
          >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setEditModalButtonVisible(!this.state.isEditButtonModalVisible);
                }}
              >
                <Text>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      );

    } else {
      return (
        <View>
          <StatusBar hidden={true} />
          <MainView
            clearDisplayText={this.clearDisplayText}
            updateDisplayText={this.updateDisplayText}
            toggleEditButton={this.toggleEditButton}
            launchEditButtonModal={this.launchEditButtonModal}

            displayText={this.state.displayText}
            isEditButtonModalVisible={this.state.isEditButtonModalVisible}

            buttons={this.state.buttons}
          />
        </View>
      );

    }
  }
}