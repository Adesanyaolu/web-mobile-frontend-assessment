import React from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';
import { Slide } from '../../utils/slides';

interface PaginatorProps {
  data: Slide[];
  scrollX: Animated.Value;
}

export default function Paginator({ data, scrollX }: PaginatorProps) {
  const { width } = useWindowDimensions();

  return (
    <View className="flex-row h-16 justify-center items-center">
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        // Keep dot width constant; animate only the colored indicator's opacity
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <View
            key={i.toString()}
            style={{ width: 40 }}
            className="h-2.5 rounded-full bg-gray-300 mx-[-2] items-center justify-center overflow-hidden"
          >
            <Animated.View
              style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, opacity }}
              className="rounded-full bg-primary"
            />
          </View>
        );
      })}
    </View>
  );
}
