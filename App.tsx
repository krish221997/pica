import { RootSiblingParent } from 'react-native-root-siblings'
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './app/navigation/RootNavigator';
import { ApiKeyContextProvider } from './app/contexts/apiKeyContext';
import { AuthProvider } from './src/contexts/AuthContext';


export default function App() {
  return (
    <AuthProvider>
      <ApiKeyContextProvider>
        <RootSiblingParent>
          <StatusBar style="light" />
          <RootNavigator />
        </RootSiblingParent>
      </ApiKeyContextProvider>
    </AuthProvider>
  );
}