import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import {setTable} from '../../actions/index'

import Button from '../../components/Button'
import TextInput from '../../components/TextInput'


const PInputData = ({back, run}) => {
  const table = useSelector(state => state.table)
  const dispath = useDispatch()

  const [valueM, setValueM] = useState()
  const [valueN, setValueN] = useState()
  const [valueX, setValueX] = useState()

  const getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  const createTable = () => {
    let columnArr = [{}]
    const numberCompare = getRandomArbitrary(100, 999)
    for(let i = 0; i < valueN; i++) {
      let rowArr = []
      for(let j = 0; j < valueM; j++) {
        rowArr[j] = getRandomArbitrary(100, 999)
      }
      columnArr[i] = {}
      columnArr[i].arr = rowArr
      columnArr[i].id = Math.random()
      columnArr[i].summ = rowArr.reduce((a, b) => a + b)
    }

    for (let i = 0; i < valueX; i++) {
      columnArr[getRandomArbitrary(0, valueN)].arr[getRandomArbitrary(0, valueM)] = numberCompare
    }

    return columnArr
  }

  const save = () => {
    if (!valueM || !valueN || !valueX) {
      return Alert.alert(
       'Info',
       !valueM ? 'need write rows' : 'need write columns', 
       [
         {text: 'OK', onPress: () => console.log('OK Pressed')},
       ],
       {cancelable: false},
     );
   }

    let newTable = createTable()


    dispath(setTable(newTable))
    run()
  }

  return (
    <View style={styles.root}>
      <View style={styles.info}>
        <Text style={styles.text}>You have to start from small numbers, example 2x2, 5x5, 10x10 and etc.</Text>
      </View>
      <View style={styles.row}>
        <TextInput 
          title='Input rows'
          keyboardType='numeric'
          value={valueM}
          onChangeText={text => setValueM(text)}
        />
        <TextInput 
          title='Input columns'
          keyboardType='numeric'
          value={valueN}
          onChangeText={text => setValueN(text)}
        />
        <TextInput 
          title='Number compare'
          keyboardType='numeric'
          value={valueX}
          onChangeText={text => setValueX(text)}
        />
      </View>
      <View style={styles.row}>
        <Button title='Back' onPress={back}/>
        <Button title='Run' onPress={save}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#535c68',
    textAlign: 'center'
  },
  info: {
    padding: 10
  }
});


export default PInputData;
