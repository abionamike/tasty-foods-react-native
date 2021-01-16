import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';
import { Feather, FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  const handleSubmit = () => {
    console.log({ fullName, email, password, confirmPassword });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6b290b" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Full name</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="grey"
            size={20}
          />
          <TextInput 
            placeholder="Your full name(first name first)"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setFullName(val)}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="envelope-o"
            color="grey"
            size={20}
          />
          <TextInput 
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="grey"
            size={20}
          />
          <TextInput 
            placeholder="Your Password"
            secureTextEntry={secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setPassword(val)}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          >
            {secureTextEntry ? 
              <Feather 
                name="eye-off"
                color="grey"
                size={20}
              /> :
              <Feather 
                name="eye"
                color="grey"
                size={20}
              />
            }
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="grey"
            size={20}
          />
          <TextInput 
            placeholder="Your Password"
            secureTextEntry={confirmSecureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setConfirmPassword(val)}
          />
          <TouchableOpacity
            onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}
          >
            {confirmSecureTextEntry ? 
              <Feather 
                name="eye-off"
                color="grey"
                size={20}
              /> :
              <Feather 
                name="eye"
                color="grey"
                size={20}
              />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={{ width: '100%' }} onPress={handleSubmit}>
            <LinearGradient
              colors={['#D95407', '#862d04']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: '#fff' }]}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            style={[styles.signIn, {
              borderColor: '#862d04',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, { color: '#862d04' }]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b290b'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: 'hsl(25, 100%, 96%)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a'
  },
  button: {
    alignItems: 'center',
    marginTop: 35
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});