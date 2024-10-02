// app/_layout.tsx
import React, { useContext } from 'react';
import { Slot } from 'expo-router';
import { AuthProvider, AuthContext } from '../contexts/authContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

function MainLayout() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    // Si no está autenticado, mostrar la pantalla de login
    return <Slot initialRouteName="login" />;
  }

  // Si está autenticado, permitir el acceso a las rutas internas
  return <Slot />;
}
