import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Objective</Text>
        <Text style={styles.instructions}>To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.</Text>
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
    color:'#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#000000',

  },
  instructions: {
    textAlign: 'center',
     
    marginBottom: 5,
  },
});
