import React, { Component } from 'react';
import { Dimensions, Platform, PixelRatio, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import normalize from '../utils/normalize';

// Acquire dimensions from the current screen used
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class OutputBar extends Component {
    render() {
        return (
            <View style={styles.outputBarContainer}>
                <View style={styles.displayTextContainer}>
                    <Text numberOfLines={1} ellipsizeMode="head" style={styles.displayText}>{this.props.displayText}</Text>
                </View>

                {/* Button to clear the display text */}
                <View style={styles.clearButtonContainer}>
                    <TouchableHighlight accessible={true} accessibilityLabel={'Clear'} style={styles.clearButtonTouchable} onPress={this.props.clearDisplayText}>
                        <Text style={styles.clearButtonText}>&times;</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

// CSS Styles
const styles = StyleSheet.create({
    outputBarContainer: {
        ...Platform.select({
            ios: {
                backgroundColor: '#f5f5f5',
                top: 5,
                height: screenHeight * 0.1
            },
            android: {
                backgroundColor: '#f5f5f5',
                height: screenHeight * 0.1
            },
        }),

        display: 'flex',
        flexDirection: 'row',
        borderColor: 'black',
        borderTopWidth: 4,
        borderBottomWidth: 4
    },

    // Text area where a pressed button is displayed
    displayTextContainer: {
        flexGrow: 9,
        maxWidth: 0.8 * screenWidth,
        paddingLeft: 16,
        paddingRight: 16
    },
    // Display text formatting
    displayText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: normalize(72),
    },
    // Formatting for button to clear the text area
    clearButtonContainer: {
        backgroundColor: '#232323',
        flexGrow: 1,
        flexDirection: 'column',
    },
    clearButtonTouchable: {
        alignItems: 'center',
    },
    clearButtonText: {
        color: "#eee",
        fontSize: normalize(80),
    }
});
