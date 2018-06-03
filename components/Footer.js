import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.editButtonContainer}>
          <TouchableHighlight style={styles.editButtonTouchable} onPress={this.props.toggleEditButton}>
            <Text style={styles.editButtonText}>X</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    ...Platform.select({
      ios: {
        backgroundColor: '#f5f5f5',
        color: '#000',
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


  // displayTextContainer: {
  //   flexGrow: 9,
  //   maxWidth: 0.8 * screenWidth
  // },
  // displayText: {
  //   color: '#000',
  //   fontWeight: 'bold',
  //   fontSize: 24,
  // },
  //
  // editButtonContainer: {
  //   flexGrow: 1,
  //   backgroundColor: 'blue',
  //   flexDirection: 'column',
  //   justifyContent: 'space-evenly',
  // },
  // editButtonTouchable: {
  //   alignItems: 'center',
  //   padding: 10,
  //   paddingVertical: 30
  // },
  // editButtonText: {
  //   color: "#eee",
  //   fontSize: 24,
  // }
});
