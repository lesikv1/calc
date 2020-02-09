import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const RemoveCell = ({onPress}) => {

  return (
    <View style={styles.root}>
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
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
    backgroundColor: 'red',
    borderRadius: 4,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});


export default RemoveCell;
