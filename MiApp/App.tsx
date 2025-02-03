import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons'; // O prueba con otro conjunto de íconos



function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la aplicación</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aquí se muestran los detalles de la aplicación</Text>
    </View>
  );
}

// Pantalla de configuraciones (Settings)
function SettingsScreen() {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsTitle}>Configuraciones</Text>
      <Text style={styles.settingsText}>Información sobre la aplicación</Text>
    </View>
  );
}
function CustomDrawerContent(_props: any) {
  return (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerTitle}>Menú Principal</Text>
      <View style={styles.drawerItem}>
        <Icon name="home" size={20} color="#fff" />
        <Text style={styles.drawerItemText}>Inicio</Text>
      </View>
      <View style={styles.drawerItem}>
        <Icon name="info-circle" size={20} color="#fff" />
        <Text style={styles.drawerItemText}>Detalles</Text>
      </View>
      <View style={styles.drawerItem}>
        <Icon name="cogs" size={20} color="#fff" />
        <Text style={styles.drawerItemText}>Configuraciones</Text>
      </View>
    </View>
  );
}
const Drawer = createDrawerNavigator();

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
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  settingsTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  settingsText: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
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
    marginLeft: 10,
  },
});
