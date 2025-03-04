interface Theme {
  colors: {
    textPrimary: string;
    textSecondary: string;
    background: string;
  };
}

export const useTheme = (): Theme => {
  return {
    colors: {
      textPrimary: '#FFFFFF',
      textSecondary: '#A1A1A1',
      background: '#000000',
    },
  };
}; 