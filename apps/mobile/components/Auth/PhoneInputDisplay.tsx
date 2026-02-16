import { Text } from "@/components/ui/text";
import { View } from "react-native";

interface PhoneInputDisplayProps {
  phoneNumber: string;
}

export default function PhoneInputDisplay({ phoneNumber }: PhoneInputDisplayProps) {
  const formatted = phoneNumber || "+1-000-000-000";

  return (
    <View className="flex-row items-center rounded-xl border border-[#E2E8F0] bg-white px-4 h-14 mx-6">
      {/* Flag + Country Code */}
      <View className="flex-row items-center mr-3">
        <Text className="text-lg mr-1">🇺🇸</Text>
        <Text className="text-xs text-light-gray font-sf-regular">▼</Text>
      </View>

      {/* Divider */}
      <View className="w-px h-6 bg-[#E2E8F0] mr-3" />

      {/* Phone Number */}
      <Text
        className={`text-base font-sf-regular flex-1 ${
          phoneNumber ? "text-text" : "text-light-gray"
        }`}
      >
        {phoneNumber ? `+1-${phoneNumber}` : "+1-000-000-000"}
      </Text>
    </View>
  );
}
