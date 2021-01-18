import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawerContent from './DrawerContent';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={({ navigation }) => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;