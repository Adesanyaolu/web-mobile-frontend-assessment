import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SocialLoginButton from "@/components/Auth/SocialLoginButton";

describe("SocialLoginButton", () => {
  it("renders with an icon name", () => {
    const { getByText } = render(
      <SocialLoginButton iconName="logo-apple" iconColor="#000" onPress={jest.fn()} />
    );
    // Mocked Ionicons renders icon name as text
    expect(getByText("logo-apple")).toBeTruthy();
  });

  it("renders with an image source", () => {
    const { toJSON } = render(
      <SocialLoginButton image={1} onPress={jest.fn()} />
    );
    expect(toJSON()).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <SocialLoginButton iconName="logo-google" onPress={onPress} />
    );
    fireEvent.press(getByText("logo-google"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders without crashing when no onPress is provided", () => {
    const { toJSON } = render(
      <SocialLoginButton iconName="logo-apple" />
    );
    expect(toJSON()).toBeTruthy();
  });
});
