import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const ResultCell = ({value = 0}) => {

  return (
    <View style={styles.root}>
      <View 
        style={styles.button}
      >
        <Text style={styles.textButton}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 1,
  },
  button: {
    minWidth: 30,
    height: 30,
    backgroundColor: 'orange',
    borderRadius: 4,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});


export default ResultCell;
