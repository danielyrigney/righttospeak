import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class HeaderBar extends Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.displayTextContainer}>
                    <Text style={styles.displayText}>{this.props.displayText}</Text>
                </View>

                <View style={styles.clearButtonContainer}>
                    <TouchableHighlight style={styles.clearButtonTouchable} onPress={this.props.clearDisplayText}>
                        <Text style={styles.clearButtonText}>X</Text>
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
        borderTopWidth: 2,
        borderBottomWidth: 2
    },


    displayTextContainer: {
        flexGrow: 9,
        maxWidth: 0.8 * screenWidth
    },
    displayText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
    },

    clearButtonContainer: {
        flexGrow: 1,
        backgroundColor: '#232323',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    clearButtonTouchable: {
        alignItems: 'center',
        padding: 10,
        paddingVertical: 30
    },
    clearButtonText: {
        color: "#eee",
        fontSize: 24,
    }
});