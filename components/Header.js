import React, { Component } from 'react';
import { Dimensions, Platform, PixelRatio, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// based on iPhone 5s's scale
const scale = screenWidth / 320;

const normalize = (size) => {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
    }
}

export default class HeaderBar extends Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.displayTextContainer}>
                    <Text numberOfLines={1} ellipsizeMode="head" style={styles.displayText}>{this.props.displayText}</Text>
                </View>

                <View style={styles.clearButtonContainer}>
                    <TouchableHighlight accessible={true} accessibilityLabel={'Clear'} style={styles.clearButtonTouchable} onPress={this.props.clearDisplayText}>
                        <Text style={styles.clearButtonText}>&times;</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
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


    displayTextContainer: {
        flexGrow: 9,
        maxWidth: 0.8 * screenWidth,
        paddingLeft: 16,
        paddingRight: 16
    },
    displayText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: normalize(72),
    },

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
