import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default class ButtonView extends React.Component {
    render() {
        return (
            <View style = {styles.container} >
                <Button title="Hey! Press Me!" onPress = {() => { }}>
                    <Text>SIMPLE!</Text>
                </Button>
            </View>

        );
    }
}

const ButtonTitle = () => {
    return (
        <Text style={{paddingTop: 50}}>test</Text>
    )
};

const ButtonImage = () => {
    //const icon = this.props;

    return (
        <Image style={styles.image} source={require('./assets/icon.png')} resizeMode="contain" />
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    }
});
