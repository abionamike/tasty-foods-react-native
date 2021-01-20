import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, OrdersStackNavigator } from './StackNavigators';
import { Ionicons } from '@expo/vector-icons'; 

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'My Orders') {
            iconName = focused ? 'cart' : 'cart';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#D95407',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'hsl(25, 100%, 96%)',
          position: 'absolute',
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="My Orders" component={OrdersStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
