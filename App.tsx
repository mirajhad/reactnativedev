import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { Login } from './src/pages';




function App(): React.JSX.Element {
 
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
