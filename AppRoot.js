import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './screens/navigators/StackNavigators';
import DrawerNavigator from './screens/navigators/DrawerNavigator';

export default function AppRoot() {
  const { userInfo } = useSelector(state => state.userLogin);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userInfo ? 
          <DrawerNavigator /> :
          <RootStackNavigator />
        }
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

    