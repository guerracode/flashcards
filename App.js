import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigation from './src/routes/Navigation';
import React from 'react';
import { primary } from './src/util/_colors';

const Theme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
   },
};

export default function App() {
   return (
      <SafeAreaProvider>
         <NavigationContainer theme={Theme}>
            <Navigation />
         </NavigationContainer>
      </SafeAreaProvider>
   );
}
