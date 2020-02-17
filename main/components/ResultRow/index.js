import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useDispatch, useSelector} from 'react-redux'

import ResultCell from '../ResultCell'

const ResultRow = ({ middleColumn = []}) => {

  const table = useSelector(state => state.table)

  let arr = []

  for(let i = 0; i < table.length; i++) {
    for(let j = 0; j < table[i].arr.length; j++) {
      if (arr[j]) {
        arr[j] = arr[j] + table[i].arr[j]
      } else {
        arr[j] = table[i].arr[j]
      }
    } 
  }

  let newArr = arr.map(item => {
    return Math.round(item / table.length)
  })


  const content = newArr.map((item, key) => (<ResultCell value={item} />))

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


export default ResultRow;
