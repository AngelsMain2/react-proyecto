// app/_layout.tsx
import React, { useContext } from 'react';
import { Stack } from 'expo-router';
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

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="tabs" />
      ) : (
        <Stack.Screen name="login" />
      )}
    </Stack>
  );
}