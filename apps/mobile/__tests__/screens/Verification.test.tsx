import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import VerificationScreen from "@/app/(auth)/verification";

const safeAreaMetrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <SafeAreaProvider initialMetrics={safeAreaMetrics}>{ui}</SafeAreaProvider>
  );

const mockPush = jest.fn();
const mockReplace = jest.fn();
const mockBack = jest.fn();
jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockReplace,
    back: mockBack,
  }),
  Stack: { Screen: () => null },
}));

describe("Verification Screen", () => {
  beforeEach(() => {
    mockPush.mockClear();
    mockReplace.mockClear();
    mockBack.mockClear();
  });

  it("renders the phone step by default", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);
    expect(getByText("Enter your phone number")).toBeTruthy();
    expect(getByText("Send Code")).toBeTruthy();
  });

  it("renders the phone input display", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);
    expect(getByText("+1-000-000-000")).toBeTruthy();
  });

  it("renders the custom keypad", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);
    // Should show number keys
    expect(getByText("1")).toBeTruthy();
    expect(getByText("5")).toBeTruthy();
    expect(getByText("9")).toBeTruthy();
    expect(getByText("0")).toBeTruthy();
  });

  it("updates phone number when keypad keys are pressed", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);

    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("5"));

    expect(getByText("+1-555")).toBeTruthy();
  });

  it("handles backspace on phone number", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("3"));

    expect(getByText("+1-123")).toBeTruthy();

    // Press backspace
    fireEvent.press(getByText("backspace-outline"));

    expect(getByText("+1-12")).toBeTruthy();
  });

  it("limits phone number to 10 digits", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);

    // Enter 10 digits
    for (let i = 0; i < 12; i++) {
      fireEvent.press(getByText("1"));
    }

    expect(getByText("+1-1111111111")).toBeTruthy();
  });

  it("transitions to OTP step when Send Code is pressed", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);

    fireEvent.press(getByText("Send Code"));

    expect(getByText("Enter verification code")).toBeTruthy();
    expect(getByText("Verify Accounts")).toBeTruthy();
  });

  it("allows OTP input via keypad on OTP step", () => {
    const { getByText, getAllByText } = renderWithProviders(<VerificationScreen />);

    // Move to OTP step
    fireEvent.press(getByText("Send Code"));
    expect(getByText("Enter verification code")).toBeTruthy();

    // Enter OTP digits
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("4"));

    // OTP digits should be visible (each digit appears on both keypad and OTP display)
    expect(getAllByText("1").length).toBeGreaterThanOrEqual(2);
    expect(getAllByText("2").length).toBeGreaterThanOrEqual(2);
    expect(getAllByText("3").length).toBeGreaterThanOrEqual(2);
    expect(getAllByText("4").length).toBeGreaterThanOrEqual(2);
  });

  it("handles OTP backspace", () => {
    const { getByText, getAllByText } = renderWithProviders(<VerificationScreen />);

    fireEvent.press(getByText("Send Code"));

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("2"));

    // Backspace the last digit
    fireEvent.press(getByText("backspace-outline"));

    // "2" from the OTP input should be gone — only the keypad "2" remains
    expect(getAllByText("2")).toHaveLength(1);
    // "1" still in both keypad and OTP display
    expect(getAllByText("1").length).toBeGreaterThanOrEqual(2);
  });

  it("shows Resend Code button on OTP step", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);

    fireEvent.press(getByText("Send Code"));

    expect(getByText("Resend Code")).toBeTruthy();
  });

  it("navigates to welcome on verify", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);

    fireEvent.press(getByText("Send Code"));
    fireEvent.press(getByText("Verify Accounts"));

    expect(mockReplace).toHaveBeenCalledWith("/welcome");
  });

  it("navigates back from phone step", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);

    // Press the back button (renders Ionicons "chevron-back" as text)
    fireEvent.press(getByText("chevron-back"));

    expect(mockBack).toHaveBeenCalled();
  });

  it("goes back to phone step from OTP step on back press", () => {
    const { getByText } = renderWithProviders(<VerificationScreen />);

    // Transition to OTP
    fireEvent.press(getByText("Send Code"));
    expect(getByText("Enter verification code")).toBeTruthy();

    // Press back -> should go to phone step
    fireEvent.press(getByText("chevron-back"));
    expect(getByText("Enter your phone number")).toBeTruthy();
  });
});
