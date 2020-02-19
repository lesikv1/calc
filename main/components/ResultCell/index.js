import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import {setPersent} from '../../actions/index'


const ResultCell = ({value = 0, type, index}) => {
  const persent = useSelector(state => state.persent)
  const dispath = useDispatch()

  const shortClick = () => {
    dispath(setPersent({type: null, index: null, value: null}))
  }

  const longClick = () => {
    dispath(setPersent({type, index, value}))
  }

  return (
    <View style={styles.root}>
      <TouchableHighlight 
        style={styles.button}
        onPress={shortClick}
        onLongPress={longClick}
      >
        <Text style={styles.textButton}>{value}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 1,
  },
  button: {
    minWidth: 30,
    height: 30,
    backgroundColor: 'orange',
    borderRadius: 4,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});


export default ResultCell;
