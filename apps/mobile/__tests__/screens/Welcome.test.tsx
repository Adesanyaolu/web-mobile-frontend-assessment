import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Welcome from "@/app/welcome";
import { SafeAreaProvider } from "react-native-safe-area-context";

const safeAreaMetrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <SafeAreaProvider initialMetrics={safeAreaMetrics}>{ui}</SafeAreaProvider>
  );

const mockReplace = jest.fn();
jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: mockReplace,
    back: jest.fn(),
  }),
  Stack: { Screen: () => null },
}));

describe("Welcome Screen", () => {
  beforeEach(() => {
    mockReplace.mockClear();
  });

  it("renders the welcome screen", () => {
    const { getByText } = renderWithProviders(<Welcome />);
    expect(getByText("I'm ready to start!")).toBeTruthy();
  });

  it("navigates to dashboard on button press", () => {
    const { getByText } = renderWithProviders(<Welcome />);
    fireEvent.press(getByText("I'm ready to start!"));
    expect(mockReplace).toHaveBeenCalledWith("/(protected)/dashboard");
  });
});
