import { Text } from "@/components/ui/text";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text className="text-2xl font-sf-bold items-center justify-center">Dashboard</Text>
        </SafeAreaView>
    )
}