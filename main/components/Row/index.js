import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated
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

  const [opacity, setOpacity] = useState(new Animated.Value(0))

  const remove = () => {
    let time = 1500
    Animated.timing(opacity, {
      toValue: 0,
      duration: time
    }).start()
    setTimeout(removeRow, time)
  }

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000
    }).start()
  }, [])

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      width: '100%'
    },
    rowCells: {
      width: '75%'
    },
    actionCells: {
      width: '25%',
      flexDirection: 'row',
      paddingLeft: 10,
      justifyContent: 'space-between'
    },
    rowTable: {
      flexDirection: 'row'
    }
  });
  return (
    <Animated.View style={{opacity}}>
      <View style={styles.root}>
        <ScrollView horizontal={true} style={styles.rowCells}>
          {content}
      </ScrollView>
      <View style={styles.actionCells}>
          <ResultCell value={data[indexColumn].summ} type='row' index={indexColumn} />
          <RemoveCell onPress={remove}/>
        </View>
      </View>
    </Animated.View>
  );
};


export default Row;
