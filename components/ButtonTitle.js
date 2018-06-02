import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class ButtonTitle extends Component {
  render() {
    return (
        <Text style={styles.text}>{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    }
});