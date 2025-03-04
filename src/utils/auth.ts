import { useAuth } from '../contexts/AuthContext';

export const ensureAuth = () => {
  // You might want to implement proper error handling here
  const { user, token } = useAuth();
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  return {
    authKey: token,
    user,
  };
}; 