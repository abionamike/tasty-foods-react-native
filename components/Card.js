import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="food-drumstick" style={styles.avatar} />

const CardItem = ({ title, subtitle, path, content, price }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={path} />
      <Card.Title title={title} subtitle={subtitle} left={LeftContent} right={(props) => <Text {...props} style={styles.price}>${price}</Text>} titleStyle={{ color: '#05375a', fontSize: 18 }} subtitleStyle={{ color: '#05375a' }} />
      <Card.Content>
        <Text style={{ color: '#05375a' }}>{content}</Text>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity onPress={() => alert('Added to Cart')}>
          <Button color="crimson" icon="cart">Add to Cart</Button>
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
}

export default CardItem;

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: 300,
    marginTop: 20
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: '#862d04'
  },
  price: {
    color: '#05375a',
    fontSize: 20,
    marginRight: 15,
    fontWeight: 'bold'
  }
});