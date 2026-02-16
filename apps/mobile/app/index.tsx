
import { Button } from "@/components/ui/button";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="items-center flex-center mt-20 justify-center bg-primary flex-1">

      <Text className="text-4xl text-red-500">Edit appndex.tsx to edit this screen.</Text>
      <Button variant="default"><Text>Hello</Text></Button>
    </SafeAreaView>
  );
}
