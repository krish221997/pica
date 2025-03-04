import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../../src/contexts/AuthContext';
import AuthScreen from '../../src/screens/AuthScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthScreen} />
        ) : (
          <Stack.Screen name="Main" component={DrawerNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}