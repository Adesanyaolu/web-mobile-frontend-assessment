import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignUp from "@/app/(auth)/sign-up";

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

describe("SignUp Screen", () => {
  beforeEach(() => {
    consoleSpy.mockClear();
    mockPush.mockClear();
    mockReplace.mockClear();
  });

  it("renders the sign-up screen correctly", () => {
    const { getByText, getByTestId } = render(<SignUp />);
    expect(getByText("Join Stockline")).toBeTruthy();
    expect(getByTestId("username-input")).toBeTruthy();
    expect(getByTestId("email-input")).toBeTruthy();
    expect(getByTestId("password-input")).toBeTruthy();
    expect(getByText("Continue")).toBeTruthy();
  });

  it("renders social login buttons", () => {
    const { getByText } = render(<SignUp />);
    expect(getByText("Or continue with")).toBeTruthy();
  });

  it("renders 'Already have an account? Sign In' link", () => {
    const { getByText } = render(<SignUp />);
    expect(getByText("Sign In")).toBeTruthy();
  });

  it("navigates to login on 'Sign In' press", () => {
    const { getByText } = render(<SignUp />);
    fireEvent.press(getByText("Sign In"));
    expect(mockPush).toHaveBeenCalledWith("/(auth)/login");
  });

  it("shows validation errors when submitting empty form", async () => {
    const { getByTestId, findByText } = render(<SignUp />);
    fireEvent.press(getByTestId("signup-button"));

    expect(await findByText("Username is required")).toBeTruthy();
    expect(await findByText("Email is required")).toBeTruthy();
    expect(await findByText("Password is required")).toBeTruthy();
  });

  it("shows username validation error for short username", async () => {
    const { getByTestId, findByText } = render(<SignUp />);

    fireEvent.changeText(getByTestId("username-input"), "ab");
    fireEvent.changeText(getByTestId("email-input"), "test@email.com");
    fireEvent.changeText(getByTestId("password-input"), "password123");
    fireEvent.press(getByTestId("signup-button"));

    expect(await findByText("Username must be at least 3 characters")).toBeTruthy();
  });

  it("shows email validation error for invalid email", async () => {
    const { getByTestId, findByText } = render(<SignUp />);

    fireEvent.changeText(getByTestId("username-input"), "johndoe");
    fireEvent.changeText(getByTestId("email-input"), "not-valid");
    fireEvent.changeText(getByTestId("password-input"), "password123");
    fireEvent.press(getByTestId("signup-button"));

    expect(await findByText("Please enter a valid email address")).toBeTruthy();
  });

  it("shows password validation error for short password", async () => {
    const { getByTestId, findByText } = render(<SignUp />);

    fireEvent.changeText(getByTestId("username-input"), "johndoe");
    fireEvent.changeText(getByTestId("email-input"), "test@email.com");
    fireEvent.changeText(getByTestId("password-input"), "12");
    fireEvent.press(getByTestId("signup-button"));

    expect(await findByText("Password must be at least 6 characters")).toBeTruthy();
  });

  it("console.logs data and navigates on successful submission", async () => {
    const { getByTestId } = render(<SignUp />);

    fireEvent.changeText(getByTestId("username-input"), "johndoe");
    fireEvent.changeText(getByTestId("email-input"), "john@email.com");
    fireEvent.changeText(getByTestId("password-input"), "password123");
    fireEvent.press(getByTestId("signup-button"));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Sign up form submitted:", {
        username: "johndoe",
        email: "john@email.com",
        password: "password123",
      });
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/(auth)/verification");
    });
  });

  it("does not navigate on invalid submission", async () => {
    const { getByTestId } = render(<SignUp />);

    fireEvent.changeText(getByTestId("email-input"), "bad");
    fireEvent.press(getByTestId("signup-button"));

    await waitFor(() => {
      expect(mockPush).not.toHaveBeenCalledWith("/(auth)/verification");
    });
  });
});
