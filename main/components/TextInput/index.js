import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

const Button = ({
  value,
  placeholder = '',
  onChangeText,
  keyboardType = '',
  title = ''
}) => {
  const [active, setActive] = useState(false)
  

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      padding: 5
    },
    input: {
      maxWidth: 200,
      minWidth: 100,
      height: 36,
      borderColor: active ? '#0984e3' :'gray',
      borderWidth: 2,
      borderRadius: 4,
      marginTop: 10
    },
    text: {
      color: active ? '#0984e3' :'gray',
      fontSize: 16,
      fontWeight: 'bold',
    }
  });
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        keyboardType={keyboardType}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
    </View>
  );
};


export default Button;
