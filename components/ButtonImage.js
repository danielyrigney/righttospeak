import React, { Component } from 'react';
import { Image, StyleSheet, Text } from 'react-native';

export default class ButtonImage extends Component {
    render() {
        return (
            <Image source={this.props.path} resizeMode="contain" style={styles.image} />
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: Image.resizeMode.contain,
    }
});
