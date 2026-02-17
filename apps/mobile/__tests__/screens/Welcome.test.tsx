import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Welcome from "@/app/welcome";

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
    const { getByText } = render(<Welcome />);
    expect(getByText("I'm ready to start!")).toBeTruthy();
  });

  it("navigates to dashboard on button press", () => {
    const { getByText } = render(<Welcome />);
    fireEvent.press(getByText("I'm ready to start!"));
    expect(mockReplace).toHaveBeenCalledWith("/(protected)/dashboard");
  });
});
