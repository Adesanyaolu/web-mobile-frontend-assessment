import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomKeypad from "@/components/Auth/CustomKeypad";

describe("CustomKeypad", () => {
  it("renders all number keys (0-9)", () => {
    const { getByText } = render(
      <CustomKeypad onKeyPress={jest.fn()} onBackspace={jest.fn()} />
    );
    for (let i = 0; i <= 9; i++) {
      expect(getByText(String(i))).toBeTruthy();
    }
  });

  it("renders the * key", () => {
    const { getByText } = render(
      <CustomKeypad onKeyPress={jest.fn()} onBackspace={jest.fn()} />
    );
    expect(getByText("*")).toBeTruthy();
  });

  it("renders the backspace key", () => {
    const { getByText } = render(
      <CustomKeypad onKeyPress={jest.fn()} onBackspace={jest.fn()} />
    );
    // Mocked Ionicons renders icon name as text
    expect(getByText("backspace-outline")).toBeTruthy();
  });

  it("calls onKeyPress when a number key is pressed", () => {
    const onKeyPress = jest.fn();
    const { getByText } = render(
      <CustomKeypad onKeyPress={onKeyPress} onBackspace={jest.fn()} />
    );
    fireEvent.press(getByText("5"));
    expect(onKeyPress).toHaveBeenCalledWith("5");
  });

  it("calls onKeyPress when * is pressed", () => {
    const onKeyPress = jest.fn();
    const { getByText } = render(
      <CustomKeypad onKeyPress={onKeyPress} onBackspace={jest.fn()} />
    );
    fireEvent.press(getByText("*"));
    expect(onKeyPress).toHaveBeenCalledWith("*");
  });

  it("calls onBackspace when backspace is pressed", () => {
    const onBackspace = jest.fn();
    const { getByText } = render(
      <CustomKeypad onKeyPress={jest.fn()} onBackspace={onBackspace} />
    );
    fireEvent.press(getByText("backspace-outline"));
    expect(onBackspace).toHaveBeenCalledTimes(1);
  });

  it("calls onKeyPress for each key pressed in sequence", () => {
    const onKeyPress = jest.fn();
    const { getByText } = render(
      <CustomKeypad onKeyPress={onKeyPress} onBackspace={jest.fn()} />
    );
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("3"));
    expect(onKeyPress).toHaveBeenCalledTimes(3);
    expect(onKeyPress).toHaveBeenNthCalledWith(1, "1");
    expect(onKeyPress).toHaveBeenNthCalledWith(2, "2");
    expect(onKeyPress).toHaveBeenNthCalledWith(3, "3");
  });
});
