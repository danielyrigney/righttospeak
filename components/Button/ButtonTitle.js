import React, { Component } from 'react';
import { Dimensions, Platform, PixelRatio, StyleSheet, Text } from 'react-native';

import normalize from './../../utils/normalize';

// button text
export default class ButtonTitle extends Component {
    render() {
        return (
            <Text style={styles.text}>{this.props.title}</Text>
        );
    }
}

// CSS Style
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        // uses util function to normalize font
        fontSize: normalize(45),
    }
});
