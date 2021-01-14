import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: true
    });
    
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(`http://${process.env.IP}:5000/api/uploads`, { image: result.base64 }, config);

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <ReduxProvider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!!</Text>

        <Button title="Pick an image" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
        <StatusBar style="auto" />
      </View>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
