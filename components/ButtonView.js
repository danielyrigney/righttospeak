import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonTitle from './ButtonTitle';
import ButtonImage from './ButtonImage';

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

                <TouchableOpacity title="" onPress={this.updateDisplayText} style={styles.touchableOpacityContainer}>
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
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 5, 
        borderColor: 'red',
        borderRadius: 50,
        backgroundColor: 'pink',
    },
    touchableOpacityContainer: {
        flex: 1,
    },
    textContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // borderWidth: 1,
        // backgroundColor: 'orange',
    },
    imageContainer: {
        flex: 8,
        alignItems: 'center',
        // borderWidth: 1,
        // backgroundColor: 'red',
    }
});
