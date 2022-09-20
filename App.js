import React from "react";
import { StyleSheet, Text, View, Image,Button, Alert,ImageBackground } from 'react-native';
import BG from './assets/bg.jpg';
import LOGO from './assets/logo.png';
const image = { source :BG};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageF}>
      <Text style={styles.title}>Bienvenido a SCOM REST!</Text>
      <Image
        source={LOGO} style={styles.image} />
      <Button
        color="blue"
        title="Ingresar"
        onPress={() => Alert.alert('Ingresar')}
      
      />
       <Button
        color="#292929 "
        title="Registrar"
        onPress={() => Alert.alert('Registrar')}
      
      />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor:'#fff',
  },
  imageF: {
      flex: 1,
      justifyContent: "center"
    },
  title: { fontSize:30, color: '#000'},
  image: { height: 100, width: 600, justifyContent:'flex-start' },
  
});

