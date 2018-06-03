import { Speech } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ButtonTitle from './ButtonTitle';
import ButtonImage from './ButtonImage';
import Constants from '../../data/constants';
import images from '../../data/images';

export default class ButtonView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            button: props.button,
            pitch: 1,
            rate: 0.75,
            language: 'en'
        };
    }

    // speech synthesis audio when button is tapped
    speakText = () => {
        const start = () => {
            this.setState({ inProgress: true });
        };
        const complete = () => {
            this.state.inProgress && this.setState({ inProgress: false });
        };

        Speech.speak(this.state.button.text.toLowerCase(), {
            language: this.state.language,
            pitch: this.state.pitch,
            rate: this.state.rate,
            onStart: start,
            onDone: complete,
            onStopped: complete,
            onError: complete,
        });
    };

    // button text displayed in output bar when button is tapped
    onPressOnView = () => {
        const { text, type } = this.state.button;

        if (type === 'action') {
            const category = text.toLowerCase();

            this.props.filterButtonsByCategory(category);

        } else {
            this.props.updateDisplayText(text);
            this.speakText();

        }
    }

    // edit mode opened when button is long pressed
    onPressOnEdit = () => {
        const { id } = this.state.button;

        this.props.launchEditButtonModal(id);
    }

    render() {
        const { text, imageId } = this.state.button;
        const imageURL = images.find(image => image.id === imageId).imageURL;

        return (
            <View style={[styles.container, { borderColor: Constants.colorScheme[this.state.button.partOfSpeech] }]}>
                <TouchableOpacity
                    title=""
                    style={styles.touchableOpacityContainer}
                    onPress={this.onPressOnView}
                    onLongPress={this.onPressOnEdit}
                >
                    <View style={styles.textContainer}>
                        <ButtonTitle title={text} />
                    </View>
                    <View style={styles.imageContainer}>
                        <ButtonImage path={imageURL} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 8,
        borderColor: 'red',
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    touchableOpacityContainer: {
        flex: 1,
    },
    textContainer: {
        paddingTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    imageContainer: {
        paddingBottom: 8,
        alignItems: 'center'
    }
});
