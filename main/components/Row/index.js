import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useDispatch, useSelector} from 'react-redux'
import {cloneDeep} from 'lodash'
import {setTable} from '../../actions/index'

import Cell from '../Cell'
import ResultCell from '../ResultCell'
import RemoveCell from '../RemoveCell'

const Row = ({indexColumn = 0, table = [], setMiddleColumn, removeRow}) => {
  const dispath = useDispatch()
  const data = useSelector(state => state.table)

  const increment = (indexRow) => {
    let newTable = cloneDeep(data)
    newTable[indexColumn].arr[indexRow] = newTable[indexColumn].arr[indexRow] + 1
    newTable[indexColumn].summ = newTable[indexColumn].arr.reduce((a, b) => a + b)
    dispath(setTable(newTable))
  }

  let content = data[indexColumn].arr.map((item, key) => (<Cell onPress={() => increment(key)} value={item} indexRow={key} indexColumn={indexColumn} key={key}/>))

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      width: '100%',
    },
  });
  return (
    <View style={styles.root}>
      {content}
    </View>
  );
};


export default Row;
