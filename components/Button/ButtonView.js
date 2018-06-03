import { Speech } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ButtonTitle from './ButtonTitle';
import ButtonImage from './ButtonImage';
import Constants from '../../data/constants';

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

    speakText = () => {
        const start = () => {
            this.setState({ inProgress: true });
        };
        const complete = () => {
            this.state.inProgress && this.setState({ inProgress: false });
        };

        Speech.speak(this.state.button.text, {
            language: this.state.language,
            pitch: this.state.pitch,
            rate: this.state.rate,
            onStart: start,
            onDone: complete,
            onStopped: complete,
            onError: complete,
        });
    };

    onPressOnView = () => {
        const { text } = this.state.button;

        this.props.updateDisplayText(text);
        this.speakText();
    }

    onPressOnEdit = () => {
        const { id } = this.state.button;

        this.props.launchEditButtonModal(id);
    }

    render() {
        const { text } = this.state.button;

        return (
            <View style={[styles.container, { borderColor: Constants.colorScheme[this.state.button.partOfSpeech] }]}>
                <TouchableOpacity title="" onPress={this.onPressOnView} onLongPress={this.onPressOnEdit} style={styles.touchableOpacityContainer}>
                    <View style={styles.textContainer}>
                        <ButtonTitle title={text}/>
                    </View>
                    <View style={styles.imageContainer}>
                        <ButtonImage path={this.state.button.imageURL}/>
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