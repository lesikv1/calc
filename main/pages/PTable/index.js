import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux'

import {setTable} from '../../actions/index'

import Button from '../../components/Button'
import AddCell from '../../components/AddCell'
import Row from '../../components/Row'
import ResultRow from '../../components/ResultRow'

const PTable = ({restart, update}) => {
  const dispath = useDispatch()
  const table = useSelector(state => state.table)
  const [data, setData] = useState(table || [])

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
    data.splice(indexColumn, 1)
    setData(data)
    dispath(setTable(data))
    update()
  }

  const addRow = () => {
    let rowArr = []
    for(let j = 0; j < data[0].length; j++) {
      rowArr[j] = Math.ceil(Math.random() * 10)
    }
    data.push(rowArr)
    setData(data)
    update()
  }

  let content = data.map((item, key) => {
    return (
      <Row
        table={data}
        indexColumn={key}
        setMiddleColumn={() => setMiddleColumn(middleValue())}
        removeRow={() => removeRow(key)}
        key={key}
      />
    )
  })

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
    }
  });
  return (
    <ScrollView style={styles.scroll}>
      <ScrollView horizontal={true}>
        <View style={styles.root}>
          <Text>Table</Text>
          <View style={styles.row}>
            <Button title='Restart' onPress={restart} />
            <AddCell onPress={addRow}/>
          </View>
          {content}
          <ResultRow table={data} middleColumn={middleColumn}/>
        </View>
      </ScrollView>
    </ScrollView>
  );
};


export default PTable;
