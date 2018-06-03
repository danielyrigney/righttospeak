import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Body from './Body';
import OutputBar from './OutputBar.js';

// Parent component for Header and Body components
export default class MainView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <OutputBar
                    displayText={this.props.displayText}
                    clearDisplayText={this.props.clearDisplayText}
                />

              {/* Main Body component - contains boards with buttons */}
                <Body
                    buttons={this.props.buttons}
                    updateDisplayText={this.props.updateDisplayText}
                    launchEditButtonModal={this.props.launchEditButtonModal}
                />
            </View>
        );
    }
}


// CSS styles for MainView component
const styles = StyleSheet.create({
    container: {
        height: '100%',
    }
});
