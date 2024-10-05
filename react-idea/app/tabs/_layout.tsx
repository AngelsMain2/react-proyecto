// app/home/_layout.tsx
import React from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';
import { Slot, usePathname, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeLayout() {
  const pathname = usePathname();
  const router = useRouter();

  // Funciones de navegación para los botones del footer
  const goToScreen = (screenName: string) => {
    router.push(`/tabs/${screenName}`);
  };

  // Obtener el nombre de la pantalla actual
  const currentRoute = pathname.split('/').pop();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/react-logo.png')}
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
        <Slot />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable
          style={styles.footerButton}
          onPress={() => goToScreen('screen1')}
        >
          <Ionicons
            name="home"
            size={24}
            color={currentRoute === 'screen1' ? '#FFD700' : '#fff'}
          />
          <Text style={styles.footerButtonText}>Inicio</Text>
        </Pressable>
        <Pressable
          style={styles.footerButton}
          onPress={() => goToScreen('screen2')}
        >
          <Ionicons
            name="search"
            size={24}
            color={currentRoute === 'screen2' ? '#FFD700' : '#fff'}
          />
          <Text style={styles.footerButtonText}>Buscar</Text>
        </Pressable>
        <Pressable
          style={styles.footerButton}
          onPress={() => goToScreen('screen3')}
        >
          <Ionicons
            name="heart"
            size={24}
            color={currentRoute === 'screen3' ? '#FFD700' : '#fff'}
          />
          <Text style={styles.footerButtonText}>Favoritos</Text>
        </Pressable>
        <Pressable
          style={styles.footerButton}
          onPress={() => goToScreen('screen4')}
        >
          <Ionicons
            name="person"
            size={24}
            color={currentRoute === 'screen4' ? '#FFD700' : '#fff'}
          />
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

