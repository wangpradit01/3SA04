import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Weather from './components/Weather';

export default function App() {

  return (
    <View style={styles.container}>
      <Weather zipCode="83120" />
      <StatusBar style="dark" hidden />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
})
