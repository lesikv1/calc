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
  CheckBox,
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
      <Text style={styles.textTitle}>Welcome to Onuf</Text>
      <Text style={styles.text}>That you start game need complet some steps</Text>
      <Text style={styles.text}>Namely, enter the data, the quantity of cell for rows and for columns</Text>
      <View style={styles.row}>
        <CheckBox
          value={understand}
          onChange={() => setUnderstand(!understand)}
        />
        <Text style={styles.text}>I am understend</Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          if (understand) {
            start()
          }
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
