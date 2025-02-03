import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerTitle}>Menú Principal</Text>
      
      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.drawerItemText}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Details')}>
        <Text style={styles.drawerItemText}>Detalles</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
          drawerStyle: { width: 240 },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingTop: 50,
    paddingLeft: 20,
  },
  drawerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  drawerItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  drawerItemText: {
    color: '#fff',
    fontSize: 20,
  },
});
