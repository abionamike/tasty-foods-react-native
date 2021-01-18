import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} color="#862d04" style={styles.menu} onPress={() => navigation.openDrawer()} />
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>Tasty Foods</Text>
        <Image source={require('../assets/foodie-imgs/fork-n-knife.png')} style={styles.headerImage} />
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#05375a',
    marginHorizontal: 5
  },
  menu: {
    left: -50,
    position: 'absolute'
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 40,
    width: 40,
    marginHorizontal: 0
  }
})
