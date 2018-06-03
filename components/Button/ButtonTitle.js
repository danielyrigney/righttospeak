import React, { Component } from 'react';
import { Dimensions, Platform, PixelRatio, StyleSheet, Text } from 'react-native';

import normalize from './../../tools/normalize';

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
