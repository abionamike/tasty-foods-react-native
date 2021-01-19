import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../SplashScreen';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import HomeScreen from '../HomeScreen';
import OrdersScreen from '../OrdersScreen';
import Header from '../../components/Header';

const HomeStackNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerTintColor: '#862d04',
      headerStyle: {
        backgroundColor: 'hsl(25, 100%, 96%)',
      },
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({navigation}) => ({headerTitle: () => <Header navigation={navigation} title="Tasty Foods" />})} 
      />
    </Stack.Navigator>
  )
}

const OrdersStackNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerTintColor: '#862d04',
      headerStyle: {
        backgroundColor: 'hsl(25, 100%, 96%)',
      },
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen 
        name="My Orders" 
        component={OrdersScreen} 
        options={({navigation}) => ({headerTitle: () => <Header navigation={navigation} title="My Orders" />})}
      />
    </Stack.Navigator>
  )
}

const RootStackNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export { RootStackNavigator, HomeStackNavigator, OrdersStackNavigator };