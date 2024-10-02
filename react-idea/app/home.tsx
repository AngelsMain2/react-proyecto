// app/home.tsx
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  // Funciones de navegación para los botones del footer
  const goToScreen1 = () => {
    router.push('/tabs/screen1');
  };

  const goToScreen2 = () => {
    router.push('/tabs/screen2');
  };

  const goToScreen3 = () => {
    router.push('/tabs/screen3');
  };

  const goToScreen4 = () => {
    router.push('/tabs/screen4');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/react-logo.png')}
          style={styles.logo}
        />
        <View style={styles.headerButtons}>
          <Pressable style={styles.headerButton}>
            <Ionicons name="menu" size={24} color="#fff" />
          </Pressable>
          <Pressable style={styles.headerButton}>
            <Ionicons name="notifications" size={24} color="#fff" />
          </Pressable>
          <Pressable style={styles.headerButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
          </Pressable>
        </View>
      </View>

      {/* Contenido Principal */}
      <View style={styles.mainContent}>
        <Text style={styles.welcomeText}>¡Bienvenido a la Aplicación!</Text>
        {/* Aquí puedes agregar más contenido */}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable style={styles.footerButton} onPress={goToScreen1}>
          <Ionicons name="home" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Inicio</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={goToScreen2}>
          <Ionicons name="search" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Buscar</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={goToScreen3}>
          <Ionicons name="heart" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Favoritos</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={goToScreen4}>
          <Ionicons name="person" size={24} color="#fff" />
          <Text style={styles.footerButtonText}>Perfil</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a11cb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6a11cb',
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 10,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  headerButtons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  headerButton: {
    marginLeft: 15,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#6a11cb',
    paddingVertical: 10,
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});
