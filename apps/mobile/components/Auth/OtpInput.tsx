import { Text } from "@/components/ui/text";
import { View } from "react-native";

interface OtpInputProps {
  code: string[];
  activeIndex: number;
}

export default function OtpInput({ code, activeIndex }: OtpInputProps) {
  return (
    <View className="flex-row justify-center gap-3 px-10">
      {code.map((digit, index) => {
        const isFocused = index === activeIndex;
        const hasValue = digit !== "";

        return (
          <View
            key={index}
            className={`flex-1 items-center justify-center relative rounded-xl border h-14 ${
              isFocused
                ? "border-primary"
                : hasValue
                ? "border-[#E2E8F0]"
                : "border-[#E2E8F0]"
            }`}
            style={{ aspectRatio: 1, maxWidth: 60, maxHeight: 60 }}
          >
            {hasValue ? (
              <Text className="text-2xl font-sf-bold text-text">{digit}</Text>
            ) : isFocused ? (
              <View
                className="w-5 h-0.5 bg-primary rounded-full"
                style={{ position: "absolute", bottom: 14, alignSelf: "center" }}
              />
            ) : null}
          </View>
        );
      })}
    </View>
  );
}
