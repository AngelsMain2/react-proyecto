// app/_layout.tsx
import React, { useContext } from 'react';
import { Slot, Stack } from 'expo-router';
import { AuthProvider, AuthContext } from '../../contexts/authContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

function MainLayout() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        // Si está autenticado, mostrar el contenido de la aplicación
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        // Si no está autenticado, mostrar la pantalla de login
        <Stack.Screen name="login" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
