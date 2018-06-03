import React, { Component } from 'react';
import { StatusBar, View, Modal, TouchableHighlight, Text, TextInput } from 'react-native';
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
            isEditButtonModalVisible: false,
            buttonToEdit_id: undefined,
            buttonToEdit_text: ''
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
        });
    }

    updateDisplayText = (text) => {
        this.setState({
            ...this.state,

            displayText: `${this.state.displayText} ${text}`
        });
    }

    // Edit Button
    launchEditButtonModal = (id) => {
        this.setState({
            ...this.state,

            isEditButtonModalVisible: true,
            buttonToEdit_id: id,
            buttonToEdit_text: this.state.buttons[id].text
        });
    }

    saveEditButton = () => {
        const { buttonToEdit_id: id, buttons } = this.state;
        const index = buttons.findIndex(button => button.id === id);

        this.setState({
            ...this.state,

            buttons: [
                // Keep everything before
                ...buttons.slice(0, index),

                // Insert the new state
                {
                    ...this.state.buttons[index],
                    text: this.state.buttonToEdit_text
                },

                // Keep everything after
                ...buttons.slice(index + 1)
            ],

            // Reset
            isEditButtonModalVisible: false,
            buttonToEdit_id: undefined,
            buttonToEdit_text: ''
        });
    }

    cancelEditButton = () => {
        this.setState({
            ...this.state,

            // Reset
            isEditButtonModalVisible: false,
            buttonToEdit_id: undefined,
            buttonToEdit_text: ''
        });
    }
    
    render() {
        if (this.state.isEditButtonModalVisible) {
            const { buttonToEdit_id: id } = this.state;
            let button = this.state.buttons[id];

            return (
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isEditButtonModalVisible}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <TextInput
                                placeholder="Please enter a text for this button."
                                value={this.state.buttonToEdit_text}
                                onChangeText={(newName) => {
                                    this.setState({
                                        ...this.state,
                                        buttonToEdit_text: newName
                                    });
                                }}
                            />

                            <TouchableHighlight onPress={this.cancelEditButton}>
                                <Text>Cancel</Text>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={this.saveEditButton}>
                                <Text>Save</Text>
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