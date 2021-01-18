import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Platform, Image } from 'react-native';
import axios from 'axios';
import { API_URL } from '@env';
import * as ImagePicker from 'expo-image-picker';

const UploadScreen = ({ navigation }) => {
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

      const { data } = await axios.post(`${API_URL}/api/uploads`, { image: result.base64 }, config);

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Upload Screen!</Text>
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
    </View>
  )
}

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 30
  },
});