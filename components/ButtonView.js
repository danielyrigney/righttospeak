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

export default class ButtonView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            button: {
                text: 'Hello!'
            }
        };
    }

    updateDisplayText = () => {
        const { text } = this.state.button;

        this.props.updateDisplayText(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity title="" onPress={this.updateDisplayText} style={styles.touchableOpacityContainer}>
                    <View style={styles.textContainer}>
                        <ButtonTitle />
                    </View>
                    <View style={styles.imageContainer}>  
                        <ButtonImage />
                    </View>    
                </TouchableOpacity>
            </View>
        );
    }
}

const ButtonTitle = () => {
    const titleText = "changing the title";

    return (
        <Text style={styles.text}>{`${titleText}`}</Text>
    )
};

const ButtonImage = () => {
    //const icon = this.props;
    const iconFilePath = "A/a_P.bmp";

    return (
        <Image source={require(`../assets/${iconFilePath}`)} resizeMode="contain" />
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