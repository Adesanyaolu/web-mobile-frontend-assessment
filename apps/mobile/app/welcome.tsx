import { Image, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Welcome() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        {/* Logo */}
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{ width: 120, height: 120 }}
        />

        {/* Title */}
        <Text className="text-3xl font-sf-bold text-text mt-6 text-center">
          Hello Tocky! 👋
        </Text>
        <Text className="text-3xl font-sf-bold text-text mt-1 text-center">
          Welcome to Stockline
        </Text>

        {/* Subtitle */}
        <Text className="text-sm font-sf-regular text-light-gray mt-4 text-center">
          It's great to have you here
        </Text>
      </View>

      {/* Bottom Button */}
      <View className="px-6" style={{ paddingBottom: Math.max(insets.bottom, 16) }}>
        <Button onPress={() => router.replace("/(protected)/dashboard")}>
          <Text className="text-white text-lg font-sf-bold">
            I'm ready to start!
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}