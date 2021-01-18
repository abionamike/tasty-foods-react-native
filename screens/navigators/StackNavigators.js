import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import SplashScreen from '../SplashScreen';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import HomeScreen from '../HomeScreen';
import OrdersScreen from '../OrdersScreen';
import Header from '../../components/Header';

const HomeStackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerTintColor: '#862d04',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleAlign: 'center',
      // headerLeft: () => <MaterialIcons name="menu" size={28} color="#862d04" style={{ marginLeft: 8 }} onPress={() => navigation.openDrawer()} />,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerTitle: ({ navigation }) => <Header navigation={navigation} />
      }} />
    </Stack.Navigator>
  )
}

const OrdersStackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerTintColor: '#862d04',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleAlign: 'center',
      headerLeft: () => <MaterialIcons name="menu" size={28} color="#862d04" style={{ marginLeft: 8 }} onPress={() => navigation.openDrawer()} />,
    }}>
      <Stack.Screen name="My Orders" component={OrdersScreen} />
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