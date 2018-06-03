import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonTitle from './ButtonTitle';
import ButtonImage from './ButtonImage';
import Constants from '../data/constants';
import { Speech } from 'expo';

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
      this.props.launchEditButtonModal();
    }

    render() {
        const { text } = this.state.button;

        const onPress = () => {
          this.props.isEditingButton ? this.onPressOnEdit() : this.onPressOnView();
        };

        return (
            <View style={[styles.container, {borderColor: Constants.colorScheme[this.state.button.partOfSpeech]}]}>
                <TouchableOpacity title="" onPress={onPress} style={styles.touchableOpacityContainer}>
                    <View style={styles.textContainer}>
                        <ButtonTitle title={this.state.button.text}/>
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
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    touchableOpacityContainer: {
        flex: 1,
    },
    textContainer: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    imageContainer: {
        // paddingTop: 50,
        alignItems: 'center'
    }
});
