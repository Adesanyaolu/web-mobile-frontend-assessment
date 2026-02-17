import React from "react";
import { render } from "@testing-library/react-native";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { fireEvent } from "@testing-library/react-native";

describe("Button", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Button>
        <Text>Press Me</Text>
      </Button>
    );
    expect(getByText("Press Me")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button onPress={onPress}>
        <Text>Click</Text>
      </Button>
    );
    fireEvent.press(getByText("Click"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("renders with default variant", () => {
    const { toJSON } = render(
      <Button>
        <Text>Default</Text>
      </Button>
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders with outline variant", () => {
    const { getByText } = render(
      <Button variant="outline">
        <Text>Outline</Text>
      </Button>
    );
    expect(getByText("Outline")).toBeTruthy();
  });

  it("renders as disabled", () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <Button onPress={onPress} disabled>
        <Text>Disabled</Text>
      </Button>
    );
    const button = getByRole("button");
    expect(button.props.accessibilityState?.disabled).toBe(true);
  });
});
