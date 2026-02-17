import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import AuthHeaders from "@/components/Auth/AuthHeaders";
import AuthInput from "@/components/Auth/AuthInput";
import SocialLoginButton from "@/components/Auth/SocialLoginButton";
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Login() {
  const router = useRouter();
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
          <AuthHeaders
            title="Hi There! 👋"
            subtitle="Welcome back, Sign in to your account"
            highlightedText=""
          />

          {/* Form Inputs */}
          <View className="px-6 mt-8 gap-4">
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

          {/* Login Button */}
          <View className="px-6 mt-8">
            <Button>
              <Text className="text-white text-lg font-sf-bold">Login</Text>
            </Button>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity className="items-center mt-4">
            <Text className="text-lg text-primary font-sf-medium">
              Forgot password?
            </Text>
          </TouchableOpacity>

          {/* Spacer to push social section down */}
          <View className="flex-1" />

          {/* Divider: Or login with */}
          <View className="flex-row items-center px-6 mt-8">
            <View className="flex-1 h-px bg-[#E2E8F0]" />
            <Text className="mx-4 text-sm text-light-gray font-sf-regular">
              Or login with
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

          {/* Footer: Don't have an account? */}
          <View className="flex-row items-center justify-center mt-6 mb-6">
            <Text className="text-lg text-dark-gray font-sf-regular">
              Don't have an account?{" "}
            </Text>
            <Text
              className="text-lg text-primary font-sf-bold"
              onPress={() => router.push("/(auth)/sign-up")}
            >
              Sign Up
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}