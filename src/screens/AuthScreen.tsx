import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from '../components/ui';
import { Github } from 'lucide-react-native';
import { useTheme } from '../hooks/useTheme';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import Constants from 'expo-constants';
import { useAuth } from '../contexts/AuthContext';

WebBrowser.maybeCompleteAuthSession();

const GITHUB_CLIENT_ID = Constants.expoConfig?.extra?.githubClientId;
const AUTH_ENDPOINT = 'https://github.com/login/oauth/authorize';

export default function AuthScreen() {
  const { colors } = useTheme();
  const { signIn } = useAuth();

  const handleGitHubAuth = async () => {
    try {
      const authRequest = new AuthSession.AuthRequest({
        clientId: GITHUB_CLIENT_ID,
        scopes: ['identity', 'user'],
        redirectUri: AuthSession.makeRedirectUri({
          scheme: 'your-app-scheme'
        })
      });

      const result = await authRequest.promptAsync({
        authorizationEndpoint: AUTH_ENDPOINT,
      });

      if (result.type === 'success') {
        const { code } = result.params;
        // After successfully getting user data from GitHub
        signIn({ /* user data */ });
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Your App</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Sign in with GitHub to get started
        </Text>

        <Button
          onPress={handleGitHubAuth}
          style={styles.button}
          variant="outline"
        >
          <View style={styles.buttonContent}>
            <Github size={20} style={styles.icon} />
            <Text style={styles.buttonText}>Continue with GitHub</Text>
          </View>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
}); 