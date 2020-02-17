/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const PWelcome = ({start}) => {
  // console.log(props, 'props')

  const [understand, setUnderstand] = useState(false)

  return (
    <View style={styles.root}>
      <Text style={styles.textTitle}>Welcome to game</Text>
      <Text style={styles.text}>To start your game complete some steps first.</Text>
      <Text style={styles.text}>Enter the data like the quantity of cells for rows and columns</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          start()
        }}
      >
        <Text style={styles.textButton}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  textTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#535c68',
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#535c68',
    textAlign: 'center'
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: '#0984e3',
    borderRadius: 4,
    marginTop: 10
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});

export default PWelcome;
