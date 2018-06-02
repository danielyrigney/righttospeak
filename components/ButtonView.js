import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ButtonTitle from './ButtonTitle';

export default class ButtonView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            button: props.button
        };
    }

    updateDisplayText = () => {
        const { text } = this.state.button;

        this.props.updateDisplayText(text);
    }

    render() {
        const { text } = this.state.button;

        return (
            <View style={styles.container}>
                <TouchableOpacity title="" onPress={this.updateDisplayText} >
                    <View>
                        <ButtonTitle text={text} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


const ButtonImage = () => {
    //const icon = this.props;
    const iconFilePath = "A/a_P.bmp";

    return (
        <Image source={require(`../assets/${iconFilePath}`)} resizeMode="contain" />
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    image: {
    }
});