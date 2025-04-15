import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useThemeStore } from './app/theme/useThemeStore';
import { NavigationContainer } from '@react-navigation/native';
import { InitialStack } from './app/Routes/Stack/InitialStack/InitialStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { theme } = useThemeStore();

  useEffect(() => {
    async function prepare() {
      SplashScreen.preventAutoHideAsync();
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <InitialStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})