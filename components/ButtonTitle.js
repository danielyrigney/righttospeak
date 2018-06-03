import React, { Component } from 'react';
import { Dimensions, Platform, PixelRatio, StyleSheet, Text,  } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


// based on iphone 5s's scale
const scale = screenWidth / 320;

const normalize = (size) => {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
    }
}

export default class ButtonTitle extends Component {
  render() {
    return (
        <Text style={styles.text}>{this.props.title}</Text>
    )
  }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: normalize(50),
    },
});