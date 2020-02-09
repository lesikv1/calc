import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const Button = ({onPress, title = ''}) => {

  return (
    <View style={styles.root}>
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 5,
  },
  button: {
    minWidth: 100,
    maxWidth: 100,
    height: 30,
    backgroundColor: '#0984e3',
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


export default Button;
