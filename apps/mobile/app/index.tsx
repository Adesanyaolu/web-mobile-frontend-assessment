import Paginator from "@/components/Welcome/Paginator";
import SlideItem from "@/components/Welcome/SlideItem";
import slides from "@/utils/slides";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useRef, useState } from "react";
import { Animated, FlatList, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <View className="w-full flex-row justify-end px-5 mt-2">
        <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
          <Text className="text-primary font-sf-medium text-xl">Skip</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1">
        <FlatList
          data={slides}
          renderItem={({ item }) => <SlideItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />

      <View
        className="w-full px-5 gap-6 flex-row"
        style={{ paddingBottom: Math.max(insets.bottom, 16) }}
      >
        <View className="flex-1">
          <Button variant="outline" onPress={() => router.push('/(auth)/login')}>
            <Text className="font-sf-bold">Log In</Text>
          </Button>
        </View>
        <View className="flex-1">
          <Button onPress={() => router.push('/(auth)/sign-up')}>
            <Text className="text-white font-sf-bold">Get Started</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
