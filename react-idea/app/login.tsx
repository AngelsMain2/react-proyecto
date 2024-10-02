// app/login.tsx
import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { AuthContext } from '../contexts/authContext';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  // Credenciales simuladas
  const usuarioValido = {
    correo: 'usuario@ejemplo.com',
    contrasena: '123456',
  };

  const iniciarSesion = () => {
    if (!correo || !contrasena) {
      Alert.alert('Campos Vacíos', 'Por favor ingresa correo y contraseña');
      return;
    }

    if (
      correo === usuarioValido.correo &&
      contrasena === usuarioValido.contrasena
    ) {
      signIn(); // Actualiza el estado de autenticación
      router.replace('/home');
    } else {
      Alert.alert('Error', 'Correo o contraseña incorrectos');
    }
  };

  return (
    <LinearGradient colors={[ '#2575fc','#6a11cb',]} style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/react-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Bienvenido</Text>
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
        <TouchableOpacity style={styles.button} onPress={iniciarSesion}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Función no implementada')}>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
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

export default LoginScreen;
