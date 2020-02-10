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

  console.log(table, 'table')

  const [valueM, setValueM] = useState()
  const [valueN, setValueN] = useState()

  const createTable = () => {
    let culumnArr = []
    for(let i = 0; i < valueN; i++) {
      let rowArr = []
      for(let j = 0; j < valueM; j++) {
        rowArr[j] = Math.ceil(Math.random() * 10)
      }
      culumnArr[i] = rowArr
    }
    return culumnArr
  }

  const save = () => {
    if (!valueM || !valueN) {
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
        <Text style={styles.text}>Need start from little numbers, example 2x2, 5x5, 10x10 and etc</Text>
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
