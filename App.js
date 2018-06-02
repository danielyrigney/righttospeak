import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonView from './ButtonView';

export default class App extends React.Component {
  render() {
    return (
      <ButtonView />
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
