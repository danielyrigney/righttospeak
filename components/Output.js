import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image} from 'react-native';
import normalize from '../utils/normalize';
import ButtonImage from './Button/ButtonImage';

export default class Outputs extends Component {
  render () {

    return (
      <View>
        <View style={styles.imageContainer}>
          <ButtonImage path={this.props.imageURL} resizeMode="contain"/>
          <Text numberOfLines={1} ellipsizeMode="head" style={styles.displayText}>{this.props.displayText}</Text>
        </View>
      </View>
    );
  }
}



// CSS Styles
const styles = StyleSheet.create({
    image: {
      width: 128,
      height: 128,
      resizeMode: Image.resizeMode.contain,
      overflow: 'visible'
    },

    // Display text formatting
    displayText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: normalize(72),
    }
});
