import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useDispatch, useSelector} from 'react-redux'
import {setTable} from '../../actions/index'

import Cell from '../Cell'
import ResultCell from '../ResultCell'
import RemoveCell from '../RemoveCell'
import AddCell from '../AddCell'

const Row = ({indexColumn = 0, table = [], setMiddleColumn, removeRow}) => {
  const dispath = useDispatch()
  const [count, setCount] = useState(table[indexColumn].reduce((a, b) => a + b))

  const increment = (indexRow) => {
    table[indexColumn][indexRow] = table[indexColumn][indexRow] + 1
    dispath(setTable(table))
    setCount(table[indexColumn].reduce((a, b) => a + b))
    setMiddleColumn()
  }

  let content = table[indexColumn].map((item, key) => (<Cell onPress={() => increment(key)} value={item} indexRow={key} key={key}/>))

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      width: '100%',
    },
  });
  return (
    <View style={styles.root}>
      {content}
      <ResultCell value={count}/>
      <RemoveCell onPress={() => removeRow()}/>
    </View>
  );
};


export default Row;
