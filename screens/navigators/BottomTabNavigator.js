import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeStackNavigator, OrdersStackNavigator } from './StackNavigators';

const BottomTabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  return(
    <Tab.Navigator 
      initialRouteName="Home"
      barStyle={{ backgroundColor: '#862d04' }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigator} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen 
        name="My Orders" 
        component={OrdersStackNavigator} 
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;