import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import { Slide } from '../../utils/slides';

interface SlideItemProps {
  item: Slide;
}

export default function SlideItem({ item }: SlideItemProps) {
  const { width, height } = useWindowDimensions();

  // Cap image size so it never upscales beyond its native resolution
  const maxImageWidth = width * 0.85;
  const imageHeight = height * 0.45;

  return (
    <View className="flex-1 justify-center items-center mt-8" style={{ width }}>
      <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{
            width: maxImageWidth,
            height: imageHeight,
          }}
        />
      </View>
      <View className="flex-[0.3] px-8 items-center my-4">
        <Text className="font-sf-bold text-3xl text-dark-gray mb-3">
          {item.title}
        </Text >

        <Text className="font-sf-regular text-xl text-center px-5 leading-6 text-light-gray">
          {item.description} <Text className="font-sf-regular text-xl text-center text-primary px-5 leading-6">{item.span}</Text>
        </Text>
      </View>
    </View>
  );
}
