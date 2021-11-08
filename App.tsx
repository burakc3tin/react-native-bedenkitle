import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Home from './android/app/src/components/Home';
import { Button, Center, NativeBaseProvider } from "native-base"
""

const App = () => {
  return(
    <NativeBaseProvider>
    <Home/>
    </NativeBaseProvider>

  )
}
export default App;
 

 