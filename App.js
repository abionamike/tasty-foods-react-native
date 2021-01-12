import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

export default function App() {

  useEffect(() => {
    console.log('Mike Abiona..');
  }, []);

  return (
    <ReduxProvider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!!</Text>
        <StatusBar style="auto" />
      </View>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
