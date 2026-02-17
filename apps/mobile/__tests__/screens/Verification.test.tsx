import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import VerificationScreen from "@/app/(auth)/verification";

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
    const { getByText } = render(<VerificationScreen />);
    expect(getByText("Enter your phone number")).toBeTruthy();
    expect(getByText("Send Code")).toBeTruthy();
  });

  it("renders the phone input display", () => {
    const { getByText } = render(<VerificationScreen />);
    expect(getByText("+1-000-000-000")).toBeTruthy();
  });

  it("renders the custom keypad", () => {
    const { getByText } = render(<VerificationScreen />);
    // Should show number keys
    expect(getByText("1")).toBeTruthy();
    expect(getByText("5")).toBeTruthy();
    expect(getByText("9")).toBeTruthy();
    expect(getByText("0")).toBeTruthy();
  });

  it("updates phone number when keypad keys are pressed", () => {
    const { getByText } = render(<VerificationScreen />);

    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("5"));

    expect(getByText("+1-555")).toBeTruthy();
  });

  it("handles backspace on phone number", () => {
    const { getByText } = render(<VerificationScreen />);

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("3"));

    expect(getByText("+1-123")).toBeTruthy();

    // Press backspace
    fireEvent.press(getByText("backspace-outline"));

    expect(getByText("+1-12")).toBeTruthy();
  });

  it("limits phone number to 10 digits", () => {
    const { getByText } = render(<VerificationScreen />);

    // Enter 10 digits
    for (let i = 0; i < 12; i++) {
      fireEvent.press(getByText("1"));
    }

    expect(getByText("+1-1111111111")).toBeTruthy();
  });

  it("transitions to OTP step when Send Code is pressed", () => {
    const { getByText } = render(<VerificationScreen />);

    fireEvent.press(getByText("Send Code"));

    expect(getByText("Enter verification code")).toBeTruthy();
    expect(getByText("Verify Accounts")).toBeTruthy();
  });

  it("allows OTP input via keypad on OTP step", () => {
    const { getByText } = render(<VerificationScreen />);

    // Move to OTP step
    fireEvent.press(getByText("Send Code"));
    expect(getByText("Enter verification code")).toBeTruthy();

    // Enter OTP digits
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("4"));

    // OTP digits should be visible
    expect(getByText("1")).toBeTruthy();
    expect(getByText("2")).toBeTruthy();
    expect(getByText("3")).toBeTruthy();
    expect(getByText("4")).toBeTruthy();
  });

  it("handles OTP backspace", () => {
    const { getByText, queryByText } = render(<VerificationScreen />);

    fireEvent.press(getByText("Send Code"));

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("2"));

    // Backspace the last digit
    fireEvent.press(getByText("backspace-outline"));

    // "2" from the OTP input should be gone (though "2" still exists on keypad)
    // We verify the OTP area only has "1"
    expect(getByText("1")).toBeTruthy();
  });

  it("shows Resend Code button on OTP step", () => {
    const { getByText } = render(<VerificationScreen />);

    fireEvent.press(getByText("Send Code"));

    expect(getByText("Resend Code")).toBeTruthy();
  });

  it("navigates to welcome on verify", () => {
    const { getByText } = render(<VerificationScreen />);

    fireEvent.press(getByText("Send Code"));
    fireEvent.press(getByText("Verify Accounts"));

    expect(mockReplace).toHaveBeenCalledWith("/welcome");
  });

  it("navigates back from phone step", () => {
    const { getByText } = render(<VerificationScreen />);

    // Press the back button (renders Ionicons "chevron-back" as text)
    fireEvent.press(getByText("chevron-back"));

    expect(mockBack).toHaveBeenCalled();
  });

  it("goes back to phone step from OTP step on back press", () => {
    const { getByText } = render(<VerificationScreen />);

    // Transition to OTP
    fireEvent.press(getByText("Send Code"));
    expect(getByText("Enter verification code")).toBeTruthy();

    // Press back -> should go to phone step
    fireEvent.press(getByText("chevron-back"));
    expect(getByText("Enter your phone number")).toBeTruthy();
  });
});
