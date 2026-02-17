import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import CustomKeypad from "@/components/Auth/CustomKeypad";
import OtpInput from "@/components/Auth/OtpInput";
import PhoneInputDisplay from "@/components/Auth/PhoneInputDisplay";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

type Step = "phone" | "otp";

export default function VerificationScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [step, setStep] = useState<Step>("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState<string[]>(["", "", "", ""]);

  // ── Phone step handlers ─────────────────────────────────
  const handlePhoneKeyPress = (key: string) => {
    if (phoneNumber.length < 10) {
      setPhoneNumber((prev) => prev + key);
    }
  };

  const handlePhoneBackspace = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const handleSendCode = () => {
    setStep("otp");
  };

  // ── OTP step handlers ──────────────────────────────────
  const activeOtpIndex = otpCode.findIndex((d) => d === "");
  const currentOtpIndex = activeOtpIndex === -1 ? otpCode.length - 1 : activeOtpIndex;

  const handleOtpKeyPress = (key: string) => {
    if (key === "*") return; // ignore star on OTP
    const nextIndex = otpCode.findIndex((d) => d === "");
    if (nextIndex === -1) return; // all filled
    const updated = [...otpCode];
    updated[nextIndex] = key;
    setOtpCode(updated);
  };

  const handleOtpBackspace = () => {
    // Find the last filled index
    const lastFilled = [...otpCode].reverse().findIndex((d) => d !== "");
    if (lastFilled === -1) return;
    const index = otpCode.length - 1 - lastFilled;
    const updated = [...otpCode];
    updated[index] = "";
    setOtpCode(updated);
  };

  const handleVerify = () => {
    router.replace("/welcome");
  };

  const handleResendCode = () => {
    setOtpCode(["", "", "", ""]);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => {
            if (step === "otp") {
              setStep("phone");
              setOtpCode(["", "", "", ""]);
            } else {
              router.back();
            }
          }}
          className="ml-4 mt-2 w-10 h-10 rounded-xl border border-[#E2E8F0] items-center justify-center"
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={20} color="#1A1A1A" />
        </TouchableOpacity>

        {/* Title & Subtitle */}
        <View className="items-center mt-6 px-6">
          <Text className="text-2xl font-sf-bold text-dark-gray">
            {step === "phone"
              ? "Enter your phone number"
              : "Enter verification code"}
          </Text>
          <Text
            className="text-lg font-sf-regular text-light-gray mt-2"
            style={{ textAlign: "center", lineHeight: 20 }}
          >
            {step === "phone"
              ? "You'll receive a 4 digit code for the\nphone number verification"
              : "We have sent the code verification to\nyour mobile number"}
          </Text>
        </View>

        {/* Input Area */}
        <View className="mt-8">
          {step === "phone" ? (
            <PhoneInputDisplay phoneNumber={phoneNumber} />
          ) : (
            <>
              <OtpInput code={otpCode} activeIndex={currentOtpIndex} />
              <TouchableOpacity
                onPress={handleResendCode}
                className="items-center mt-4"
              >
                <Text className="text-sm text-primary font-sf-bold">
                  Resend Code
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Custom Keypad */}
        <CustomKeypad
          onKeyPress={step === "phone" ? handlePhoneKeyPress : handleOtpKeyPress}
          onBackspace={step === "phone" ? handlePhoneBackspace : handleOtpBackspace}
        />

        {/* Action Button */}
        <View className="px-6 mt-4" style={{ paddingBottom: Math.max(insets.bottom, 16) }}>
          <Button onPress={step === "phone" ? handleSendCode : handleVerify}>
            <Text className="text-white text-lg font-sf-bold">
              {step === "phone" ? "Send Code" : "Verify Accounts"}
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}