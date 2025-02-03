import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton'; 

export default function HomeScreen() {
  const [input, setInput] = useState('');
  const [savedData, setSavedData] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const saveData = async () => {
    await AsyncStorage.setItem('userInput', input);
    setSavedData(input);
  };

  const loadData = async () => {
    const data = await AsyncStorage.getItem('userInput');
    if (data) setSavedData(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guardar datos en LocalStorage</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Escribe algo"
        placeholderTextColor="#bbb"
      />
      
      <CustomButton title="Guardar" onPress={saveData} />
      {savedData ? (
        <Text style={styles.result}>¡Guardado: {savedData}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
});
