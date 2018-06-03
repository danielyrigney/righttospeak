import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Modal, TouchableHighlight, TouchableOpacity, Text, TextInput, Dimensions, FlatList } from 'react-native';
import Expo from 'expo';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

import MainView from './components/MainView';
import ButtonImage from './components/Button/ButtonImage';
import buttons from './data/buttons';
import images from './data/images';
import normalize from './utils/normalize';

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
            buttonToEdit_imageId: undefined,

            // Search function for Edit mode
            possibleImagesForButton: [],
        };
    }

    // Life Cycle Method - Ensures component is mounted before turning screen
    componentDidMount() {
        Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
    }

    // Life Cycle Method - Ensures component will unmount before changing orientation back to portrait
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

    // Set edit button to visible
    launchEditButtonModal = (id) => {
        this.setState({
            ...this.state,

            isEditButtonModalVisible: true,
            buttonToEdit_id: id,
            buttonToEdit_text: this.state.buttons[id].text,
            buttonToEdit_imageId: this.state.buttons[id].imageId
        });
    }

    searchImages = (searchText) => {
        searchText = searchText.toLowerCase();

        let possibleImagesForButton = [];
        let numImagesFound = 0;

        // There should be enough characters for search
        if (searchText.length > 1) {
            for (let image of images) {
                if (image.hasOwnProperty('keywords')) {
                    for (let keyword of image.keywords) {
                        if (keyword.includes(searchText)) {
                            possibleImagesForButton.push(image);
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

    // Save changes to button
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
                    text: this.state.buttonToEdit_text,
                    imageId: this.state.buttonToEdit_imageId
                },

                // Keep everything after
                ...buttons.slice(index + 1)
            ],

            // Reset
            isEditButtonModalVisible: false,
            buttonToEdit_id: undefined,
            buttonToEdit_text: '',
            buttonToEdit_imageId: undefined,
            possibleImagesForButton: []
        });
    }

    // Discard changes to button
    cancelEditButton = () => {
        this.setState({
            ...this.state,

            // Reset
            isEditButtonModalVisible: false,
            buttonToEdit_id: undefined,
            buttonToEdit_text: '',
            buttonToEdit_imageId: undefined,
            possibleImagesForButton: []
        });
    }

    render() {
        if (this.state.isEditButtonModalVisible) {
            const { buttonToEdit_id: id } = this.state;
            let button = this.state.buttons[id];

            return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.isEditButtonModalVisible}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerModal}>
                            <StatusBar hidden={true} />
                            <Text style={styles.modalTitle}>Edit Button Details</Text>
                            <View style={styles.outerFormContainer}>
                                <View style={styles.formItemContainer}>
                                    <Text style={styles.label}>Button Text:</Text>
                                    <TextInput
                                        style={styles.textInput}
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
                                    <Text style={styles.label}>Search for Image:</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        autoFocus={true}
                                        placeholder="I'm looking for..."
                                        onChangeText={this.searchImages.bind(this)}
                                    />

                                    <View style={styles.flatListContainer}>
                                            <FlatList
                                                horizontal={true}
                                                data={this.state.possibleImagesForButton}
                                                renderItem={({ item }) => (
                                                    <TouchableOpacity onPress={() => {
                                                        this.setState({
                                                            ...this.state,
                                                            buttonToEdit_imageId: item.id
                                                        });
                                                    }}>
                                                        <ButtonImage path={item.imageURL} />
                                                    </TouchableOpacity>
                                                )}
                                            />
                                    </View>
                                </View>

                                <View style={styles.formCancelButtons}>
                                    <TouchableHighlight onPress={this.saveEditButton} style={[styles.modalButton, styles.saveEditButton]}>
                                        <Text style={styles.modalButtonText}>Save</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight onPress={this.cancelEditButton} style={[styles.modalButton, styles.cancelEditButton]}>
                                        <Text style={styles.modalButtonText}>Cancel</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
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
            </View >    
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


// CSS styling
const styles = StyleSheet.create({
    modalContainer: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#00000000',
        marginTop: 16
    },

    innerModal: {
        height: screenHeight * 0.5,
        width: screenWidth * 0.7,
        backgroundColor: '#E6E8F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 8,
        borderColor: '#4E598C',
        borderRadius: 26,
    },
    modalTitle: {
        fontSize: normalize(40),
        marginBottom: 12
    },
    label: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginBottom: 8
    },
    textInput: {
        fontSize: normalize(20),
        width: screenWidth * 0.36,
    },
    outerFormContainer: {
        alignItems: 'flex-start',
    },
    formItemContainer: {
        marginBottom: 16
    },
    imageContainer: {
        paddingBottom: 8,
        alignItems: 'center'
    },
    flatListContainer: {
        height: screenHeight * 0.2,
    },
    formCancelButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalButton: {
        height: screenHeight * 0.06,
        width: screenWidth * 0.18,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 5,
        marginHorizontal: 2,
    },
    cancelEditButton: {
        backgroundColor: '#ef9a9a'
    },
    saveEditButton: {
        backgroundColor: '#c8e6c9'
    },
    modalButtonText: {
        fontSize: normalize(20)
    }
});
