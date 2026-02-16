import AuthHeaders from "@/components/Auth/AuthHeaders";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    return (
        <SafeAreaView className="flex-1 bg-[#ffffff">
            <AuthHeaders />
            {/* <Text className="text-2xl font-sf-bold">Login Screen</Text> */}
        </SafeAreaView>
    );
}