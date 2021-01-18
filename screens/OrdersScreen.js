import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const OrdersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Orders Screen!</Text>
      <View style={styles.button}>
        <Button title="Go to Home Screen" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 30
  },
});