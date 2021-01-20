import React from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import Card from '../components/Card';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#6d3714" barStyle="light-content" />
      <View style={styles.container}>
        <Card />
        {/* <Text>Home Screen!</Text>
        <View style={styles.button}>
          <Button title="Go to My Orders Screen" onPress={() => navigation.navigate('My Orders')} />
        </View> */}
      </View>
    </>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'hsl(25, 100%, 96%)'
  },
  button: {
    margin: 30
  },
});