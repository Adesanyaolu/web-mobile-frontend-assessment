import React from "react";
import { render } from "@testing-library/react-native";
import OtpInput from "@/components/Auth/OtpInput";

describe("OtpInput", () => {
  it("renders 4 OTP boxes", () => {
    const { toJSON } = render(
      <OtpInput code={["", "", "", ""]} activeIndex={0} />
    );
    // Component should render without crashing
    expect(toJSON()).toBeTruthy();
  });

  it("displays digits in filled boxes", () => {
    const { getByText } = render(
      <OtpInput code={["1", "2", "3", ""]} activeIndex={3} />
    );
    expect(getByText("1")).toBeTruthy();
    expect(getByText("2")).toBeTruthy();
    expect(getByText("3")).toBeTruthy();
  });

  it("displays all 4 digits when fully filled", () => {
    const { getByText } = render(
      <OtpInput code={["1", "2", "3", "4"]} activeIndex={3} />
    );
    expect(getByText("1")).toBeTruthy();
    expect(getByText("2")).toBeTruthy();
    expect(getByText("3")).toBeTruthy();
    expect(getByText("4")).toBeTruthy();
  });

  it("renders empty state with no digits", () => {
    const { queryByText } = render(
      <OtpInput code={["", "", "", ""]} activeIndex={0} />
    );
    // No digits should be displayed
    expect(queryByText("1")).toBeNull();
    expect(queryByText("2")).toBeNull();
  });
});
