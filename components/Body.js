import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import GridOfButtons from './Board/GridOfButtons';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <GridOfButtons
                    buttons={this.props.buttons}
                    updateDisplayText={this.props.updateDisplayText}
                    launchEditButtonModal={this.props.launchEditButtonModal}
                    filterButtonsByCategory={this.props.filterButtonsByCategory}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        ...Platform.select({
            ios: {
                top: 10,
                height: '95%'
            },
            android: {
                height: '200'
            },
        }),
    }
});
