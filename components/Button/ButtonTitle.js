import React, { Component } from 'react';
import { Dimensions, Platform, PixelRatio, StyleSheet, Text } from 'react-native';

// get screen dimensions
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// based on iPhone 5s's scale
const scale = screenWidth / 320;

// used to modify text size in buttons
const normalize = (size) => {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
    }
}

// button text
export default class ButtonTitle extends Component {
    render() {
        return (
            <Text style={styles.text}>{this.props.title}</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: normalize(50),
    }
});