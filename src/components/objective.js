import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Objective</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions} style={styles.welcome} onPress={() => Actions.Experience()}>Experience</Text>
        <Text style={styles.instructions} style={styles.welcome} onPress={() => Actions.Education()}>Education</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
