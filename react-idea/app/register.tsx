import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
  Alert,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config'; // Importa tu auth desde la configuración de Firebase

const RegisterScreen = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const router = useRouter();

  const registrarUsuario = async () => {
    if (!correo || !contrasena) {
      Alert.alert('Campos Vacíos', 'Por favor ingresa correo y contraseña');
      return;
    }

    try {
      // Registrar al usuario en Firebase
      await createUserWithEmailAndPassword(auth, correo, contrasena);
      Alert.alert('Registro exitoso', 'El usuario ha sido registrado correctamente');
      router.replace('/login'); // Redirigir al usuario al login después del registro
    } catch (error: unknown) {
      if (error instanceof Error && 'code' in error) {
        const firebaseError = error as { code: string };

        // Manejar los diferentes tipos de errores
        switch (firebaseError.code) {
          case 'auth/email-already-in-use':
            Alert.alert('Error', 'Este correo ya está en uso');
            break;
          case 'auth/invalid-email':
            Alert.alert('Error', 'El formato del correo no es válido');
            break;
          case 'auth/weak-password':
            Alert.alert('Error', 'La contraseña es muy débil. Debe tener al menos 6 caracteres.');
            break;
          default:
            Alert.alert('Error', 'Hubo un problema al registrar. Inténtalo de nuevo.');
        }
      } else {
        Alert.alert('Error', 'Ocurrió un error desconocido.');
      }
    }
  };

  return (
    <LinearGradient colors={['#2575fc', '#6a11cb']} style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/react-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Registro</Text>
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          value={correo}
          onChangeText={setCorreo}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#ccc"
          value={contrasena}
          onChangeText={setContrasena}
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
        />
        <Pressable style={styles.button} onPress={registrarUsuario}>
          <Text style={styles.buttonText}>Registrar</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/login')}>
          <Text style={styles.forgotPassword}>¿Ya tienes una cuenta? Inicia sesión</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
    color: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: '#6a11cb',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
