import { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
// import { InitialScreen } from './app/InitialScreen/View/InitialScreen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

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
    <SafeAreaView 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      onLayout={onLayoutRootView}>
      {/* <InitialScreen /> */}
    </SafeAreaView>
  );
}
