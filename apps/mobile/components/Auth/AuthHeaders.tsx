import { Image, useWindowDimensions, View } from "react-native";
import { images } from "@/assets/images";
import { Text } from "@/components/ui/text";

interface AuthHeadersProps {
  title?: string;
  subtitle?: string;
  highlightedText?: string;
}

export default function AuthHeaders({
  title = "Join Stockline",
  subtitle = "Start investing in your favorite companies\nwith as little as ",
  highlightedText = "$1",
}: AuthHeadersProps) {
  const { width } = useWindowDimensions();

  const logoSize = Math.min(width * 0.22, 90);

  return (
    <View className="items-center" style={{ marginTop: 16 }}>
      <Image
        source={images.logo}
        resizeMode="contain"
        style={{
          width: logoSize,
          height: logoSize,
        }}
      />
      <Text
        className="text-2xl font-sf-bold text-text mt-4"
        style={{ textAlign: "center" }}
      >
        {title}
      </Text>
      <Text
        className="text-sm font-sf-regular text-light-gray mt-2"
        style={{ textAlign: "center", lineHeight: 20 }}
      >
        {subtitle}
        <Text className="text-sm font-sf-bold text-primary">
          {highlightedText}
        </Text>
      </Text>
    </View>
  );
}