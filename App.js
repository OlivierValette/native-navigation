import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './nav/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator/>
      </View>
    );
  }
}
