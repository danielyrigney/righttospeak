import React, { Component } from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Platform, PixelRatio } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


// based on iphone 5s's scale
const scale = screenWidth / 320;

export function normalize(size) {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
  }
}

import ButtonTitle from './ButtonTitle';

const images = {
  I: require('../assets/I/I1_P.bmp'),
  me: require('../assets/M/me5.bmp'),
  my: require('../assets/M/my2_P.bmp'),
  want: require('../assets/W/want_P.bmp'),
  him: require('../assets/H/him2_P.bmp'),
  her: require('../assets/H/her3_P.bmp'),
  she: require('../assets/S/she1_P.bmp'),
  he: require('../assets/H/he1_P.bmp'),
  like: require('../assets/L/like_P.bmp'),
  stop: require('../assets/S/stop_P.bmp'),
  come: require('../assets/C/come_P.bmp'),
  go: require('../assets/G/go_P.bmp'),
  away: require('../assets/A/away2_P.bmp'),
  any: require('../assets/A/any_P.bmp'),
  nothing: require('../assets/N/nothing_P.bmp'),
  hello: require('../assets/H/hello_P.bmp'),
  goodbye: require('../assets/G/goodbye_P.bmp'),
  little: require('../assets/L/little_P.bmp'),
  big: require('../assets/B/big_P.bmp'),
  wait: require('../assets/W/wait_P.bmp'),
  over: require('../assets/O/over_P.bmp'),
  under: require('../assets/U/under_P.bmp'),
  left: require('../assets/L/left1_P.bmp'),
  right: require('../assets/R/right1a_P.bmp'),
  leave: require('../assets/L/leave_P.bmp'),
  all: require('../assets/A/all_P.bmp'),
  food: require('../assets/F/food_P.bmp'),
  play: require('../assets/P/play_P.bmp'),
  feel: require('../assets/F/feel_P.bmp'),
  thing: require('../assets/T/thing_P.bmp'),
};




export default class ButtonView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            button: props.button
        };
    }


    updateDisplayText = () => {
        const { text } = this.state.button;

        this.props.updateDisplayText(text);
    }

    render() {
        const { text } = this.state.button;

        return (
            <View style={styles.container}>

                <TouchableOpacity title="" onPress={this.updateDisplayText} style={styles.touchableOpacityContainer}>
                    <View style={styles.textContainer}>
                        <ButtonTitle title={this.state.button.text}/>
                    </View>
                    <View style={styles.imageContainer}>
                        <ButtonImage path={this.state.button.image}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const ButtonImage = (props) => {
    return (
      <Image source={images[props.path]} resizeMode="contain" />
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 5, 
        borderColor: 'red',
        borderRadius: 50,
        backgroundColor: 'pink',
    },
    touchableOpacityContainer: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: normalize(30),
    },
    textContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // borderWidth: 1,
        // backgroundColor: 'orange',
    },
    image: {
    },
    imageContainer: {
        flex: 8,
        alignItems: 'center',
        // borderWidth: 1,
        // backgroundColor: 'red',
    }
});
