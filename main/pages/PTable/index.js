import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux'
import {cloneDeep} from 'lodash'

import {setTable} from '../../actions/index'

import Button from '../../components/Button'
import AddCell from '../../components/AddCell'
import Row from '../../components/Row'
import ResultRow from '../../components/ResultRow'

const PTable = ({restart, update}) => {
  const dispath = useDispatch()
  const table = useSelector(state => state.table)
  let [data, setData] = useState(table || [])

  const middleValue = () => {
    let arr = []

    for(let i = 0; i < data.length; i++) {
      for(let j = 0; j < data[i].length; j++) {
        if (arr[j]) {
          arr[j] = arr[j] + data[i][j]
        } else {
          arr[j] = data[i][j]
        }
      } 
    }

    let newArr = arr.map(item => {
      return Math.round(item / data.length)
    })
    return newArr
  }

  const [middleColumn, setMiddleColumn] = useState(middleValue() || [])

  const removeRow = (indexColumn) => {
    let copy = cloneDeep(data)
    copy.splice(indexColumn, 1)
    dispath(setTable(copy))
    setData(copy)
    setMiddleColumn(middleValue)
  }

  const addRow = () => {
    let rowArr = []
    let count = Math.ceil(Math.random() * 10)

    if (data.length) {
      count = data[0].length
    }

    for (let j = 0; j < count || 0; j++) {
      rowArr[j] = Math.ceil(Math.random() * 10)
    }

    setData([...data, rowArr])
    setMiddleColumn(middleValue)
  }

  const styles = StyleSheet.create({
    scroll: {
      width: '100%'
    },
    root: {
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    textTitle: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#535c68',
      textAlign: 'center'
    },
  });
  return (
    <ScrollView style={styles.scroll}>
      <ScrollView horizontal={true}>
        <View style={styles.root}>
          <Text style={styles.textTitle}>Game</Text>
          <View style={styles.row}>
            <Button title='Restart' onPress={restart} />
            <AddCell onPress={addRow}/>
          </View>
          {data.map((item, key) => (
            <Row
              table={data}
              indexColumn={key}
              setMiddleColumn={() => setMiddleColumn(middleValue())}
              removeRow={() => removeRow(key)}
              key={item.id}
            />
          ))}
          <ResultRow table={data} middleColumn={middleColumn}/>
        </View>
      </ScrollView>
    </ScrollView>
  );
};


export default PTable;
