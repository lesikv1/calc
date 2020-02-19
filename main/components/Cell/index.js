import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux'
import {setCompare} from '../../actions/index'

const COLOR_JUST = '#0984e3'
const COLOR_SELECTED = '#a29bfe'
const COLOR_PERSENT = '#2ecc71'

const Cell = ({onPress, value = 0, indexColumn, indexRow}) => {
  const compare = useSelector(state => state.compare)
  const persent = useSelector(state => state.persent)
  const dispath = useDispatch()

  const [typeValue, setTypeValue] = useState(value)
  const [color, setColor] = useState(COLOR_JUST)

  const findPersent = (summ) => {
    let persent = (100 / summ) * value
    persent = Math.round(persent)
    persent += ' %'
    return persent
  }

  const longClick = () => {
    dispath(setCompare({number: value}))
  }

  const shortClick = () => {
    onPress()
  }

  useEffect(() => {
    if (persent.type === 'row') {
      if (indexColumn === persent.index) {
        setColor(COLOR_PERSENT)
        setTypeValue(findPersent(persent.value))
      }
    } else if (persent.type === 'column') {
      if (indexRow === persent.index) {
        setColor(COLOR_PERSENT)
        setTypeValue(findPersent(persent.value))
      }
    } else {
      setColor(COLOR_JUST)
      setTypeValue(value)
    }
  }, [persent.type, persent.index])

  useEffect(() => {
    if (compare === value) {
      setColor(COLOR_SELECTED)
    } else {
      setColor(COLOR_JUST)
    }
  }, [compare])

  const styles = StyleSheet.create({
    root: {
      padding: 1,
    },
    button: {
      minWidth: 30,
      height: 30,
      backgroundColor: color,
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
