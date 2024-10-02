// app/home.tsx
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const irAPrincipal = () => {
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/react-logo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>¡Bienvenido a Nuestra Aplicación!</Text>
      <Text style={styles.subtitle}>
        Estamos encantados de tenerte aquí. Explora y disfruta de todas las funcionalidades que hemos preparado para ti.
      </Text>
      <Pressable style={styles.button} onPress={irAPrincipal}>
        <Text style={styles.buttonText}>Iniciar Sesion</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#6a11cb',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
