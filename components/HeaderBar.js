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
    backgroundColor: 'green',

    ...Platform.select({
      ios: {
        backgroundColor: '#f5f5f5',
        top: 50,
        height: screenHeight * 0.05
      },
      android: {
        backgroundColor: 'blue',
        height: '200'
      },
    }),

    display: 'flex',
    flexDirection: 'row'
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
    flexGrow: 1
  },
  clearButtonTouchable: {
    alignItems: 'center',
    backgroundColor: '#232323',
    padding: 10,
  },
  clearButtonText: {
    color: "#eee",
    fontSize: 18,
  }
});