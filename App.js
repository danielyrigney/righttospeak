import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Modal, TouchableHighlight, Text, TextInput } from 'react-native';
import Expo from 'expo';

import MainView from './components/MainView';
import ButtonImage from './components/Button/ButtonImage';
import buttons from './data/buttons';

const MAX_DISPLAY_WORDS = 16;

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // View mode
            displayText: '',
            displayWords: [],
            buttons: buttons,

            // Edit mode
            isEditButtonModalVisible: false,
            buttonToEdit_id: undefined,
            buttonToEdit_text: '',
            buttonToEdit_imageURL: ''
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

            displayText: '',
            displayWords: []
        });
    }

    updateDisplayText = (text) => {
        // Make a copy of array
        let displayWords = this.state.displayWords.slice();

        if (displayWords.length < MAX_DISPLAY_WORDS) {
            displayWords.push(text);

        } else {
            displayWords.shift();
            displayWords.push(text);

        }

        this.setState({
            ...this.state,

            displayText: `${displayWords.join(' ')}`,
            displayWords
        });
    }

    // Edit Button
    launchEditButtonModal = (id) => {
        this.setState({
            ...this.state,

            isEditButtonModalVisible: true,
            buttonToEdit_id: id,
            buttonToEdit_text: this.state.buttons[id].text,
            buttonToEdit_imageURL: this.state.buttons[id].imageURL,
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
            buttonToEdit_text: '',
            buttonToEdit_imageURL: ''
        });
    }

    cancelEditButton = () => {
        this.setState({
            ...this.state,

            // Reset
            isEditButtonModalVisible: false,
            buttonToEdit_id: undefined,
            buttonToEdit_text: '',
            buttonToEdit_imageURL: ''
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
                            <View style={styles.formItemContainer}>
                                <Text style={styles.label}>Button Text:</Text>
                                <TextInput
                                    autoFocus={true}
                                    placeholder="Please enter a text for this button."
                                    value={this.state.buttonToEdit_text}
                                    onChangeText={(newName) => {
                                        this.setState({
                                            ...this.state,
                                            buttonToEdit_text: newName
                                        });
                                    }}
                                />
                            </View>

                            <View style={styles.formItemContainer}>
                                <Text style={styles.label}>Select Image:</Text>
                                <View style={styles.imageContainer}>
                                    <ButtonImage path={this.state.buttonToEdit_imageURL}/>
                                </View>
                            </View>

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

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8
    },
    formItemContainer: {
        marginBottom: 16
    },
    imageContainer: {
        paddingBottom: 8,
        alignItems: 'center'
    },
    cancelEditButton: {

    },
    saveEditButton: {

    }
});