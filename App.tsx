import { RootSiblingParent } from 'react-native-root-siblings'
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './app/navigation/RootNavigator';
import { ApiKeyContextProvider } from './app/contexts/apiKeyContext';
import { AuthProvider } from './src/contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Initialize the client outside of the component to avoid recreating it on re-renders
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ApiKeyContextProvider>
          <RootSiblingParent>
            <StatusBar style="light" />
            <RootNavigator />
          </RootSiblingParent>
        </ApiKeyContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}