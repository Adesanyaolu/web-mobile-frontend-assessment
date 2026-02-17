import React from "react";
import { render } from "@testing-library/react-native";
import Dashboard from "@/app/(protected)/dashboard";

describe("Dashboard Screen", () => {
  it("renders the dashboard text", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText("Dashboard")).toBeTruthy();
  });
});
