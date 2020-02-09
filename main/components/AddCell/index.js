import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const AddCell = ({onPress}) => {

  return (
    <View style={styles.root}>
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.textButton}>+ Add column</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 5,
  },
  button: {
    minWidth: 150,
    maxWidth: 200,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 4,
    marginTop: 10
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});


export default AddCell;
