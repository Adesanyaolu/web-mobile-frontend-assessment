import "../global.css";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export const metadata = {
  title: "Assessment Mobile App",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Inter': require('../assets/fonts/Inter.ttf'),
    'SFProDisplay-Regular': require('../assets/fonts/SFPRODISPLAYREGULAR.OTF'),
    'SFProDisplay-Medium': require('../assets/fonts/SFPRODISPLAYMEDIUM.OTF'),
    'SFProDisplay-Bold': require('../assets/fonts/SFPRODISPLAYBOLD.OTF'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>

  )
}
