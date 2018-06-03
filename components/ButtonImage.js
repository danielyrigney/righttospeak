import React, { Component } from 'react';
import { Image, StyleSheet, Text } from 'react-native';

export default class ButtonTitle extends Component {
    render() {
        return (
            <Image source={this.props.path} resizeMode="contain" />
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    }
});