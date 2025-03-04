import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

export default function Text(props: TextProps) {
  return <RNText {...props} style={[{ color: '#fff' }, props.style]} />;
} 