import React from "react";
import { render } from "@testing-library/react-native";
import PhoneInputDisplay from "@/components/Auth/PhoneInputDisplay";

describe("PhoneInputDisplay", () => {
  it("renders placeholder when phone number is empty", () => {
    const { getByText } = render(<PhoneInputDisplay phoneNumber="" />);
    expect(getByText("+1-000-000-000")).toBeTruthy();
  });

  it("renders the phone number with country code prefix", () => {
    const { getByText } = render(<PhoneInputDisplay phoneNumber="1234567890" />);
    expect(getByText("+1-1234567890")).toBeTruthy();
  });

  it("renders the US flag emoji", () => {
    const { getByText } = render(<PhoneInputDisplay phoneNumber="" />);
    expect(getByText("🇺🇸")).toBeTruthy();
  });

  it("renders dropdown indicator", () => {
    const { getByText } = render(<PhoneInputDisplay phoneNumber="" />);
    expect(getByText("▼")).toBeTruthy();
  });

  it("updates displayed number when phoneNumber prop changes", () => {
    const { getByText, rerender } = render(
      <PhoneInputDisplay phoneNumber="" />
    );
    expect(getByText("+1-000-000-000")).toBeTruthy();

    rerender(<PhoneInputDisplay phoneNumber="5551234" />);
    expect(getByText("+1-5551234")).toBeTruthy();
  });
});
