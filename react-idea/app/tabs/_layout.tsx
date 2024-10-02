// app/(tabs)/_layout.tsx
import { Stack } from 'expo-router';

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="screen1" options={{ title: 'Inicio' }} />
      <Stack.Screen name="screen2" options={{ title: 'Buscar' }} />
      <Stack.Screen name="screen3" options={{ title: 'Favoritos' }} />
      <Stack.Screen name="screen4" options={{ title: 'Perfil' }} />
    </Stack>
  );
}

