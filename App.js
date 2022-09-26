import { StatusBar } from 'expo-status-bar';
import  React, {useState, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Guess The Number, press below to start</Text>
      <button  onClick="Number()">Click me</button>
      <StatusBar style="auto" />
    </View>
  );



}

function Number() {
  return (
    <View style={styles.container}>
      <Text>Hello, I am your cat!</Text>
      <StatusBar style="auto" />
    </View>
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
