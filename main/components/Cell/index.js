import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux'
import {setCompare} from '../../actions/index'

const Cell = ({onPress, value = 0}) => {
  const compare = useSelector(state => state.compare)
  const dispath = useDispatch()

  const selectColor = () => {
    let color 
    if (compare === value) {
      color = '#a29bfe'
    } else {
      color = '#0984e3'
    }

    return color
  }

  const longClick = () => {
    dispath(setCompare({number: value}))
  }

  const styles = StyleSheet.create({
    root: {
      padding: 1,
    },
    button: {
      minWidth: 30,
      height: 30,
      backgroundColor: selectColor(),
      borderRadius: 4,
    },
    textButton: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center'
    }
  });

  return (
    <View style={styles.root}>
      <TouchableHighlight 
        style={styles.button}
        onPress={onPress}
        onLongPress={longClick}
      >
        <Text style={styles.textButton}>{value}</Text>
      </TouchableHighlight>
    </View>
  );
};


export default Cell;
