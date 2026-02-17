import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import AuthHeaders from "@/components/Auth/AuthHeaders";
import AuthInput from "@/components/Auth/AuthInput";
import SocialLoginButton from "@/components/Auth/SocialLoginButton";
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header: Logo + Title + Subtitle */}
          <AuthHeaders />

          {/* Form Inputs */}
          <View className="px-6 mt-8 gap-4">
            <AuthInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
            <AuthInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <AuthInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Continue Button */}
          <View className="px-6 mt-8">
            <Button onPress={() => router.push("/(auth)/verification")}>
              <Text className="text-white text-lg font-sf-bold">Continue</Text>
            </Button>
          </View>

          {/* Spacer to push social section down */}
          <View className="flex-1" />

          {/* Divider: Or continue with */}
          <View className="flex-row items-center px-6 mt-8">
            <View className="flex-1 h-px bg-[#E2E8F0]" />
            <Text className="mx-4 text-lg text-light-gray font-sf-regular">
              Or continue with
            </Text>
            <View className="flex-1 h-px bg-[#E2E8F0]" />
          </View>

          {/* Social Login Buttons */}
          <View className="flex-row px-6 mt-5 gap-4">
            <SocialLoginButton
              image={images.google}
              onPress={() => {}}
            />
            <SocialLoginButton
              iconName="logo-apple"
              iconColor="#000000"
              onPress={() => {}}
            />
          </View>

          {/* Footer: Already have an account? */}
          <View className="flex-row items-center justify-center mt-6 mb-6">
            <Text className="text-lg text-dark-gray font-sf-regular">
              Already have an account?{" "}
            </Text>
            <Text
              className="text-lg text-primary font-sf-bold"
              onPress={() => router.push("/(auth)/login")}
            >
              Sign In
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}