// app/(tabs)/index.tsx
import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/authContext';

const HomeScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Bienvenido a la aplicación!</Text>
      <Pressable style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    marginBottom: 30
  },
  button: {
    backgroundColor: '#6a11cb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});

export default HomeScreen;
