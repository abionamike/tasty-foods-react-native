import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../assets/foodie-imgs/splash-logo.png')}
          resizeMode="stretch"
          style={styles.logo}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Calm down and let's eat!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <LinearGradient
              colors={['#D95407', '#862d04']}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons 
                name="navigate-next"
                color="#fff"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default SplashScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(25, 100%, 96%)'
  },
  header: {
    flex: 1,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header_title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#210D0D'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 40
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: '#fff',
    fontWeight: 'bold'
  }
});