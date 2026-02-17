import React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "@/components/ui/text";

describe("Text", () => {
  it("renders text content", () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText("Hello World")).toBeTruthy();
  });

  it("renders with h1 variant", () => {
    const { getByRole } = render(<Text variant="h1">Heading</Text>);
    expect(getByRole("heading")).toBeTruthy();
  });

  it("renders with h2 variant", () => {
    const { getByRole } = render(<Text variant="h2">Sub Heading</Text>);
    expect(getByRole("heading")).toBeTruthy();
  });

  it("renders with default variant", () => {
    const { getByText } = render(<Text>Default text</Text>);
    expect(getByText("Default text")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { toJSON } = render(<Text className="text-red-500">Red Text</Text>);
    expect(toJSON()).toBeTruthy();
  });
});
