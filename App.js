import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonView from './ButtonView';
import MainView from './components/MainView';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ButtonView />
        <MainView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
