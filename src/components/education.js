import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

 
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Education</Text>
        <Text style={styles.instructions}>- MCS</Text>
        <Text style={styles.instructions}>Masters in Computer Science MCS  (Present)</Text>
        <Text style={styles.instructions}>- BCS</Text>
        <Text style={styles.instructions}>Becholers in Computer Science BCS  (2018)</Text>
        <Text style={styles.instructions}></Text>
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
    color:'#000000'

  },
  instructions: {
    textAlign: 'center',
    
    marginBottom: 5,
  },
});
