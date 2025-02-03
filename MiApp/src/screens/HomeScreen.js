import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
});
