import { Text } from "@/components/ui/text";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomKeypadProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
}

export default function CustomKeypad({ onKeyPress, onBackspace }: CustomKeypadProps) {
  const keys = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "backspace"],
  ];

  return (
    <View className="px-6 mt-6">
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-between mb-2">
          {row.map((key) => (
            <TouchableOpacity
              key={key}
              onPress={() => {
                if (key === "backspace") {
                  onBackspace();
                } else {
                  onKeyPress(key);
                }
              }}
              className="flex-1 items-center justify-center py-4"
              activeOpacity={0.5}
            >
              {key === "backspace" ? (
                <Ionicons name="backspace-outline" size={26} color="#1A1A1A" />
              ) : (
                <Text className="text-2xl font-sf-medium text-text">{key}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}
