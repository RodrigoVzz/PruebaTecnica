import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
      <Text style={styles.title}>Almacenar en LocalStorage</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Escribe algo"
      />
      <Button title="Guardar" onPress={saveData} />
      {savedData ? <Text style={styles.result}>Guardado: {savedData}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { width: '100%', borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  result: { marginTop: 10, fontSize: 16 },
});
