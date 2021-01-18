import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} color="#05375a" style={styles.menu} onPress={() => navigation.openDrawer()} />
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
        {title === "Tasty Foods" ? <Image source={require('../assets/foodie-imgs/fork-n-knife.png')} style={styles.headerImage} /> :
          <Ionicons name="cart" size={30} color="#05375a" />
        }
        
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
