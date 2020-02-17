import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux'
import {cloneDeep} from 'lodash'

import {setTable} from '../../actions/index'

import Button from '../../components/Button'
import AddCell from '../../components/AddCell'
import Row from '../../components/Row'
import ResultRow from '../../components/ResultRow'
import RemoveCell from '../../components/RemoveCell'
import ResultCell from '../../components/ResultCell'

const PTable = ({restart, update}) => {
  const dispath = useDispatch()
  const table = useSelector(state => state.table)

  const removeRow = (indexColumn) => {
    let copy = cloneDeep(table)
    copy.splice(indexColumn, 1)
    dispath(setTable(copy))
  }

  const getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  const addRow = () => {
    let rowArr = []
    let count = 1

    if (table.length) {
      count = table[0].arr.length
    } else {
      count = Math.ceil(Math.random() * 10)
    }

    for (let j = 0; j < count || 0; j++) {
      rowArr[j] = getRandomArbitrary(100, 999)
    }

    const newRow = {
      arr: rowArr,
      id: Math.random(),
      summ: rowArr.reduce((a, b) => a + b)
    }

    dispath(setTable([...table, newRow]))
  }

  const styles = StyleSheet.create({
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
    header: {
      height: '15%'
    },
    content: {
      height: '80%'
    },
    footer: {
      height: '5%'
    },
    rowCells: {
      width: '80%'
    },
    actionCells: {
      width: '20%',
      flexDirection: 'row',
      paddingLeft: 10
    },
    rowTable: {
      flexDirection: 'row'
    }
  });
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.textTitle}>Game</Text>
        <View style={styles.row}>
          <Button title='Restart' onPress={() => {
            dispath(setTable([[]]))
            restart()
            }} />
          <AddCell onPress={addRow}/>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <FlatList 
          data={table}
          renderItem={({item, index}) => {
            return (
              <View style={styles.rowTable}>
                <ScrollView horizontal={true} key={index} style={styles.rowCells}>
                  <Row
                    indexColumn={index}
                    removeRow={() => removeRow(index)}
                    key={item.id}
                  />
                </ScrollView>
                <View style={styles.actionCells}>
                  <ResultCell value={table[index].summ}/>
                  <RemoveCell onPress={() => removeRow(index)}/>
                </View>
              </View>
            )
          }}
        />
      </ScrollView>
      <ScrollView  horizontal={true} style={styles.footer}>
        <ResultRow />
      </ScrollView>
    </View>
  );
};


export default PTable;
