import React from 'react';
import { AppNavigator } from './navigation';
import { ThemeProvider } from './theme/ThemeProvider';

export function App() {
  return (
    <ThemeProvider>
      <AppNavigator  />
    </ThemeProvider>
  );
}