import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AuthInput from "@/components/Auth/AuthInput";

describe("AuthInput", () => {
  it("renders with placeholder text", () => {
    const { getByPlaceholderText } = render(
      <AuthInput placeholder="Email" value="" onChangeText={jest.fn()} />
    );
    expect(getByPlaceholderText("Email")).toBeTruthy();
  });

  it("displays the provided value", () => {
    const { getByDisplayValue } = render(
      <AuthInput placeholder="Email" value="test@email.com" onChangeText={jest.fn()} />
    );
    expect(getByDisplayValue("test@email.com")).toBeTruthy();
  });

  it("calls onChangeText when text is entered", () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <AuthInput placeholder="Email" value="" onChangeText={onChangeText} />
    );
    fireEvent.changeText(getByPlaceholderText("Email"), "hello@test.com");
    expect(onChangeText).toHaveBeenCalledWith("hello@test.com");
  });

  it("renders eye icon toggle when secureTextEntry is true", () => {
    const { getByText } = render(
      <AuthInput
        placeholder="Password"
        value=""
        onChangeText={jest.fn()}
        secureTextEntry
      />
    );
    // The mocked Ionicons renders the icon name as text
    expect(getByText("eye-off-outline")).toBeTruthy();
  });

  it("toggles password visibility on eye icon press", () => {
    const { getByText } = render(
      <AuthInput
        placeholder="Password"
        value="secret"
        onChangeText={jest.fn()}
        secureTextEntry
      />
    );
    // Initially should show "eye-off-outline" (password hidden)
    expect(getByText("eye-off-outline")).toBeTruthy();

    // Press the toggle
    fireEvent.press(getByText("eye-off-outline"));

    // Now should show "eye-outline" (password visible)
    expect(getByText("eye-outline")).toBeTruthy();
  });

  it("does not render eye icon when secureTextEntry is false", () => {
    const { queryByText } = render(
      <AuthInput placeholder="Email" value="" onChangeText={jest.fn()} />
    );
    expect(queryByText("eye-off-outline")).toBeNull();
    expect(queryByText("eye-outline")).toBeNull();
  });
});
