import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export default class ButtonImage extends Component {
    render() {
        return (
            <Image source={this.props.path} resizeMode="contain" style={styles.image} />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 128,
        height: 128,
        resizeMode: Image.resizeMode.contain,
    }
});