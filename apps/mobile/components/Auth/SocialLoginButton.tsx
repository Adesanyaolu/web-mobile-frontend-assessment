import { cn } from "@/lib/utils";
import { TouchableOpacity, Image, type ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { type ComponentProps } from "react";

interface SocialLoginButtonProps {
  iconName?: ComponentProps<typeof Ionicons>["name"];
  image?: ImageSourcePropType;
  iconColor?: string;
  onPress?: () => void;
  className?: string;
}

export default function SocialLoginButton({
  iconName,
  image,
  iconColor = "#000",
  onPress,
  className,
}: SocialLoginButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "flex-1 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white h-16",
        className
      )}
      activeOpacity={0.7}
    >
      {image ? (
        <Image source={image} style={{ width: 26, height: 26, resizeMode: "contain" }} />
      ) : (
        <Ionicons name={iconName as ComponentProps<typeof Ionicons>["name"]} size={26} color={iconColor} />
      )}
    </TouchableOpacity>
  );
}
