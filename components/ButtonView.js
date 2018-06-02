import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class ButtonView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            button: {
                text: 'Hello!'
            }
        };
    }

    updateDisplayText = () => {
        const { text } = this.state.button;

        this.props.updateDisplayText(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity title="" onPress={this.updateDisplayText} >
                    <View>
                        <Text style={styles.text}> {this.props.text} </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const ButtonTitle = () => {
    const titleText = "changing the title";

    return (
        <Text style={styles.text}>{`${titleText}`}</Text>
    )
};

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