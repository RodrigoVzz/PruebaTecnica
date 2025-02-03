import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
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
      <Text style={styles.title}>Almacenar en LocalStorage</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Escribe algo"
      />
      <Button title="Guardar" onPress={saveData} />
      {savedData ? (
        <TouchableOpacity
          style={styles.navigateButton}
          onPress={() => navigation.navigate('Details', { savedData })}
        >
          <Text style={styles.navigateButtonText}>Ver Detalles</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { width: '100%', borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  navigateButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  navigateButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

