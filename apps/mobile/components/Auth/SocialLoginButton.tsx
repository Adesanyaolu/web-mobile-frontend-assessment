import { cn } from "@/lib/utils";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { type ComponentProps } from "react";

interface SocialLoginButtonProps {
  iconName: ComponentProps<typeof Ionicons>["name"];
  iconColor?: string;
  onPress?: () => void;
  className?: string;
}

export default function SocialLoginButton({
  iconName,
  iconColor = "#000",
  onPress,
  className,
}: SocialLoginButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "flex-1 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white h-14",
        className
      )}
      activeOpacity={0.7}
    >
      <Ionicons name={iconName} size={26} color={iconColor} />
    </TouchableOpacity>
  );
}
