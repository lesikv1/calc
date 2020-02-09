import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import ResultCell from '../ResultCell'

const ResultRow = ({indexColumn = 0, table = [], middleColumn = []}) => {
  const content = middleColumn.map((item, key) => (<ResultCell value={item} />))

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      width: '100%',
    },
  });
  return (
    <View style={styles.root}>
      {content}
    </View>
  );
};


export default ResultRow;
