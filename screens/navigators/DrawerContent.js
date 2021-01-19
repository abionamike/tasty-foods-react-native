import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { Text, Avatar, Caption, Switch, TouchableRipple, Title, Drawer } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { logout } from '../../redux/actions/UserAction';

const CustomDrawerContent = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.userLogin);

  console.log('draw', userInfo);
  // const avatarText = userInfo && userInfo.name.split(' ');

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('userInfo');
      dispatch(logout());

      const userInfoFromStorage = await AsyncStorage.getItem('userInfo');
      console.log(JSON.parse(userInfoFromStorage));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Avatar.Text size={50} label="ja" />
              <View style={{ marginLeft: 15 }}>
                <Title style={styles.title}>{userInfo && userInfo.name}</Title>
                <Caption style={styles.caption}>{userInfo && userInfo.email}</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />}
              onPress={() => navigation.navigate('Home')}
            />
            <DrawerItem
              label="My Orders"
              icon={({ color, size }) => <Ionicons name="cart-outline" size={size} color={color} />}
              onPress={() => navigation.navigate('My Orders')}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          icon={({ color, size }) => <MaterialCommunityIcons name="exit-to-app" size={size} color={color} />}
          onPress={handleSignOut}
        />
      </Drawer.Section>
    </View>
  )
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 15,
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3
  },
  drawerSection: {
    marginTop: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});