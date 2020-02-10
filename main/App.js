/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import PWelcome from './pages/PWelcome'
import PInputData from './pages/PInputData'
import PTable from './pages/PTable'

import rootReducer from './reducers';

const store = createStore(rootReducer)

const App = () => {
  const [tab, setTab] = useState('welcome');

  let content

  switch (tab) {
    case 'input-data':
      content = (<PInputData
        back={() => setTab('welcome')}
        run={() => setTab('table')}
      />)
      break;
      case 'table':
      content = (<PTable restart={() => setTab('welcome')} />)
      break;
    case 'welcome':
    default:
      content = (<PWelcome start={() => setTab('input-data')}/>)
      break;
  }

  return (
    <Provider store={store}>
      <View style={styles.root}>
        {content}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: 'white'
  },
});

export default App;
