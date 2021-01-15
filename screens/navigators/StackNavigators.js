import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../SplashScreen';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';

// const HomeStackNavigator = ({ navigation }) => {
//   const Stack = createStackNavigator();
//   return(
//     <Stack.Navigator screenOptions={{
//       headerTintColor: '#fff',
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTitleAlign: 'center',
//       headerLeft: () => <MaterialIcons name="menu" size={28} color="#fff" style={{ marginLeft: 8 }} onPress={() => navigation.openDrawer()} />,
//     }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   )
// }

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

export { RootStackNavigator };