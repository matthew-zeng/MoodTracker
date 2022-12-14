import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Platform, UIManager } from 'react-native';

import { AppProvider } from './App.provider';
import { BottomTabNavigator } from './screens/BottomTabs.navigator';
import SplashScreen from 'react-native-splash-screen';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
