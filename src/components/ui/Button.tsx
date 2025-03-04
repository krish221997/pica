import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'default' | 'outline';
}

export default function Button({ variant = 'default', style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        variant === 'outline' && styles.outline,
        style
      ]} 
      {...props} 
    />
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#007AFF',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#333',
  },
}); 