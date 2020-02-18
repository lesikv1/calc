import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux'
import {setCompare} from '../../actions/index'

const Cell = ({onPress, value = 0, indexColumn, indexRow}) => {
  const compare = useSelector(state => state.compare)
  const table = useSelector(state => state.table)
  const dispath = useDispatch()
  const [typeValue, setTypeValue] = useState(value)

  const selectColor = () => {
    let color 
    if (compare === value) {
      color = '#a29bfe'
    } else {
      color = '#0984e3'
    }

    return color
  }

  const findPersent = () => {
    const summ = table[indexColumn].arr.reduce((a, b) => a + b)
    let persent = (100 / summ) * value
    persent = Math.round(persent)
    persent += ' %'
    return persent
  }

  const longClick = () => {
    dispath(setCompare({number: value}))
    setTypeValue(findPersent())
  }

  const shortClick = () => {
    setTypeValue(value)
    onPress()
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
        onPress={shortClick}
        onLongPress={longClick}
      >
        <Text style={styles.textButton}>{typeValue}</Text>
      </TouchableHighlight>
    </View>
  );
};


export default Cell;
