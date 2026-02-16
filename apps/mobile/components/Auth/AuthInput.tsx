import { cn } from "@/lib/utils";
import { useState } from "react";
import { TextInput, TouchableOpacity, View, type TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AuthInputProps extends TextInputProps {
  secureTextEntry?: boolean;
}

export default function AuthInput({
  secureTextEntry = false,
  className,
  ...props
}: AuthInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={cn(
        "flex-row items-center rounded-xl border bg-white px-4 h-14",
        isFocused ? "border-primary" : "border-[#E2E8F0]",
        className
      )}
    >
      <TextInput
        className="flex-1 text-base font-sf-regular text-text h-full"
        placeholderTextColor="#A0AEC0"
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        autoCorrect={false}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible((prev) => !prev)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#A0AEC0"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
