import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Body from './Body';
import OutputBar from './OutputBar.js';

const statusBarHeight = StatusBar.currentHeight || 20;

export default class MainView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <OutputBar
                    displayText={this.props.displayText}
                    clearDisplayText={this.props.clearDisplayText}
                />

                <Body
                    buttons={this.props.buttons}
                    updateDisplayText={this.props.updateDisplayText}
                    launchEditButtonModal={this.props.launchEditButtonModal}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    }
});