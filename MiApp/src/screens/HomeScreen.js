import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [input, setInput] = useState('');
  const [savedData, setSavedData] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    loadData();
    fadeIn();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const saveData = async () => {
    await AsyncStorage.setItem('userInput', input);
    setSavedData(input);
    setInput('');  // Limpiar input
  };

  const loadData = async () => {
    const data = await AsyncStorage.getItem('userInput');
    if (data) setSavedData(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Mi App</Text>
      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Escribe algo aquí..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button} onPress={saveData}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </Animated.View>

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
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#F7F7F7' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#4A90E2', 
    marginBottom: 20 
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  input: { 
    width: '100%', 
    height: 50, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 5, 
    paddingLeft: 15, 
    fontSize: 16,
    marginBottom: 15,
  },
  button: { 
    backgroundColor: '#4CAF50', 
    padding: 15, 
    borderRadius: 5, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  navigateButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  navigateButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

