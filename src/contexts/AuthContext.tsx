import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthContextType {
  user: any; // replace 'any' with your user type
  token: string | null;
  serverUrl: string | null;
  isAuthenticated: boolean;
  signIn: (userData: any) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [serverUrl, setServerUrl] = useState<string | null>(null);

  useEffect(() => {
    loadStoredAuth();
  }, []);

  const loadStoredAuth = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('@auth_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setToken(JSON.parse(storedUser).token);
        setServerUrl(JSON.parse(storedUser).serverUrl || 'https://api.picaos.com');
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error loading stored auth:', error);
    }
  };

  const signIn = async (userData: any) => {
    try {
      await AsyncStorage.setItem('@auth_user', JSON.stringify(userData));
      setUser(userData);
      setToken(userData.token);
      setServerUrl(userData.serverUrl || 'https://api.picaos.com');
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error storing auth:', error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('@auth_user');
      setUser(null);
      setToken(null);
      setServerUrl(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error removing auth:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      token, 
      serverUrl,
      signIn, 
      signOut 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 