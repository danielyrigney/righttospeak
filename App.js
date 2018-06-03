import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Modal, FlatList, TouchableHighlight, Text, TextInput } from 'react-native';
import Expo from 'expo';

import MainView from './components/MainView';
import ButtonImage from './components/Button/ButtonImage';
import buttons from './data/buttons';

const MAX_DISPLAY_WORDS = 16;
const MAX_IMAGE_SEARCH_RESULTS = 5;

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
            buttonToEdit_imageURL: '',

            // Search function for Edit mode
            possibleImagesForButton: [],
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
            buttonToEdit_imageURL: this.state.buttons[id].imageURL
        });
    }

    searchImages = (searchText) => {
        searchText = searchText.toLowerCase();

        let possibleImagesForButton = [];
        let numImagesFound = 0;

        // There should be enough characters for search
        if (searchText.length > 1) {
            for (let button of this.state.buttons) {
                if (button.hasOwnProperty('keywords')) {
                    for (let keyword of button.keywords) {
                        if (keyword.includes(searchText)) {
                            possibleImagesForButton.push(button);
                            numImagesFound++;

                            break;
                        }
                    }

                    if (numImagesFound === MAX_IMAGE_SEARCH_RESULTS) {
                        break;
                    }
                }
            }
        }

        this.setState({
            ...this.state,
            possibleImagesForButton
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
            buttonToEdit_imageURL: '',
            possibleImagesForButton: []
        });
    }

    cancelEditButton = () => {
        this.setState({
            ...this.state,

            // Reset
            isEditButtonModalVisible: false,
            buttonToEdit_id: undefined,
            buttonToEdit_text: '',
            buttonToEdit_imageURL: '',
            possibleImagesForButton: []
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
                                    placeholder="I want to say..."
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
                                <Text style={styles.label}>Search for Image:</Text>
                                <TextInput
                                    autoFocus={true}
                                    placeholder="I'm looking for..."
                                    onChangeText={this.searchImages.bind(this)}
                                />

                                <FlatList
                                    data={this.state.possibleImagesForButton}
                                    renderItem={({ item }) => <ButtonImage path={item.imageURL} />}
                                />
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