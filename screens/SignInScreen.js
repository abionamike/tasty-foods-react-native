import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Users } from '../model/Model';

const SigInScreen = ({ navigation }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true
  });

  const textInputChange = (val) => {
    if(val.trim().length >= 4){
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      })
    }
  }

  const handlePasswordChange = (val) => {
    if(val.trim().length >= 8){
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  const handleLogin = async (username, password) => {
    try {
        const foundUser = Users.find(user => user.username === username && user.password === password);
        if(data.username.length === 0 || data.password.length === 0){
          Alert.alert('Wrong Input', 'Username or password cannot be empty', [
            { text: 'Okay' }
          ]);
          return;
        }

        if(!foundUser){
          Alert.alert('Invalid User', 'Username or password is incorrect', [
            { text: 'Okay' }
          ]);
          return;
        }
        const userToken = foundUser.userToken;
        await AsyncStorage.setItem('userToken', userToken);
  
        dispatch({ type: 'LOGIN', id: foundUser.username, token: userToken });
      } catch (error) {
        console.log(error);
      }
  }

  const handleValidUser = (val) => {
    if(val.trim().length >= 4){
      setData({
        ...data,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        isValidUser: false
      });
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6b290b" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="grey"
            size={20}
          />
          <TextInput 
            placeholder="Your Username"
            // placeholderTextColor={colors.placeholder}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? 
            <Animatable.View
              animation="bounceIn"
            >
              <Feather 
                name="check-circle"
                color="green"
                size={20}
              />
            </Animatable.View> :
            null
          }
        </View>
        {data.isValidUser ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be at atleast 4 characters long</Text>
          </Animatable.View>
        }

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="grey"
            size={20}
          />
          <TextInput 
            placeholder="Your Password"
            // placeholderTextColor={colors.placeholder}
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ? 
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
        {data.isValidPassword ? null : 
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be at atleast 8 characters long</Text>
          </Animatable.View>
        }
        <TouchableOpacity>
          <Text style={{ color: '#000', marginTop: 15 }}>Forgot password? <Text style={{ color: '#862d04' }}>Click Here</Text></Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => handleLogin(data.username, data.password)}
          >
            <LinearGradient
              colors={['#D95407', '#862d04']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={[styles.signIn, {
              borderColor: '#862d04',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, { color: '#862d04' }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default SigInScreen;

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
    marginTop: 50
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
  },
  errorMsg: {
    color: 'crimson'
  }
});