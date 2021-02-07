import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import Card from '../components/Card';

const HomeScreen = () => {
  const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium, maxime iure, harum iste mollitia temporibus quasi,'
  return (
    <>
      <StatusBar backgroundColor="#6d3714" barStyle="light-content" />
      <ScrollView>
        <View style={styles.container}>
          <Card title="Sweet Burger" subtitle="Lorem ipsum dolor" path={require('../assets/foodie-imgs/front-view-burgers-stand.jpg')} content={content} price="250" />
          <Card title="French Meat Fries" subtitle="Lorem ipsum dolor" path={require('../assets/foodie-imgs/meat-burger-french-fries-spices-side-view.jpg')} content={content} price="175" />
          <Card title="Sandwich Burger" subtitle="Lorem ipsum dolor" path={require('../assets/foodie-imgs/big-sandwich-hamburger-with-juicy-beef-burger.jpg')} content={content} price="200" />
          <Card title="French Meat Burger" subtitle="Lorem ipsum dolor" path={require('../assets/foodie-imgs/meat-burger-french-fries-spices-side-view.jpg')} content={content} price="200" />
          <Card title="Pizza with salamin" subtitle="Lorem ipsum dolor" path={require('../assets/foodie-imgs/pizza-with-salami-tomatoes.jpg')} content={content} price="220" />
        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'hsl(25, 100%, 96%)',
    paddingBottom: 80
  },
  button: {
    margin: 30
  },
});