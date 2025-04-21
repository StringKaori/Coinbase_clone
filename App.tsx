import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { InitialStack } from './app/routes/Stack/InitialStack/InitialStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';
import { useThemeStore } from './app/theme/useThemeStore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomTab } from '@routes/Tab/BottomTab/BottomTab';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { setWidth, setHeight } = useThemeStore();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    async function prepare() {
      SplashScreen.preventAutoHideAsync();
      try {
        setWidth(width);
        setHeight(height);
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
    <GestureHandlerRootView style={{ flex:1 }}>
      <SafeAreaProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          {/* <InitialStack /> */}
          <BottomTab />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
