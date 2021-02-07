import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const OrdersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have not orders yet!</Text>
      <View style={styles.button}>
        <Button title="Go to Home Screen" onPress={() => navigation.navigate('Home')} color="#862d04" />
      </View>
    </View>
  )
}

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'hsl(25, 100%, 96%)'
  },
  button: {
    margin: 30
  },
  text: {
    marginTop: 15,
    color: '#05375a',
    fontSize: 20
  }
});