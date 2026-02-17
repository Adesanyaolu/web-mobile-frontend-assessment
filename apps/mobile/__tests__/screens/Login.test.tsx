import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Login from "@/app/(auth)/login";

// Capture console.log calls
const consoleSpy = jest.spyOn(console, "log").mockImplementation();

// Track router calls
const mockPush = jest.fn();
const mockReplace = jest.fn();
jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockReplace,
    back: jest.fn(),
  }),
  Stack: { Screen: () => null },
}));

describe("Login Screen", () => {
  beforeEach(() => {
    consoleSpy.mockClear();
    mockPush.mockClear();
    mockReplace.mockClear();
  });

  it("renders the login screen correctly", () => {
    const { getByText, getByTestId } = render(<Login />);
    expect(getByText("Hi There! 👋")).toBeTruthy();
    expect(getByTestId("email-input")).toBeTruthy();
    expect(getByTestId("password-input")).toBeTruthy();
    expect(getByText("Login")).toBeTruthy();
  });

  it("renders social login buttons", () => {
    const { getByText } = render(<Login />);
    expect(getByText("Or login with")).toBeTruthy();
  });

  it("renders 'Don't have an account? Sign Up' link", () => {
    const { getByText } = render(<Login />);
    expect(getByText("Sign Up")).toBeTruthy();
  });

  it("renders forgot password link", () => {
    const { getByText } = render(<Login />);
    expect(getByText("Forgot password?")).toBeTruthy();
  });

  it("navigates to sign-up on 'Sign Up' press", () => {
    const { getByText } = render(<Login />);
    fireEvent.press(getByText("Sign Up"));
    expect(mockPush).toHaveBeenCalledWith("/(auth)/sign-up");
  });

  it("shows validation errors when submitting empty form", async () => {
    const { getByTestId, findByText } = render(<Login />);
    fireEvent.press(getByTestId("login-button"));

    expect(await findByText("Email is required")).toBeTruthy();
    expect(await findByText("Password is required")).toBeTruthy();
  });

  it("shows email validation error for invalid email", async () => {
    const { getByTestId, findByText } = render(<Login />);

    fireEvent.changeText(getByTestId("email-input"), "not-an-email");
    fireEvent.changeText(getByTestId("password-input"), "password123");
    fireEvent.press(getByTestId("login-button"));

    expect(await findByText("Please enter a valid email address")).toBeTruthy();
  });

  it("shows password validation error for short password", async () => {
    const { getByTestId, findByText } = render(<Login />);

    fireEvent.changeText(getByTestId("email-input"), "test@email.com");
    fireEvent.changeText(getByTestId("password-input"), "12");
    fireEvent.press(getByTestId("login-button"));

    expect(await findByText("Password must be at least 6 characters")).toBeTruthy();
  });

  it("console.logs data on successful submission", async () => {
    const { getByTestId, queryByText } = render(<Login />);

    fireEvent.changeText(getByTestId("email-input"), "test@email.com");
    fireEvent.changeText(getByTestId("password-input"), "password123");
    fireEvent.press(getByTestId("login-button"));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Login form submitted:", {
        email: "test@email.com",
        password: "password123",
      });
    });
  });

  it("does not console.log on invalid submission", async () => {
    const { getByTestId } = render(<Login />);

    fireEvent.changeText(getByTestId("email-input"), "bad");
    fireEvent.press(getByTestId("login-button"));

    await waitFor(() => {
      expect(consoleSpy).not.toHaveBeenCalled();
    });
  });
});
