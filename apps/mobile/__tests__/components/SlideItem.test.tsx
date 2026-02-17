import React from "react";
import { render } from "@testing-library/react-native";
import { Animated } from "react-native";
import SlideItem from "@/components/Welcome/SlideItem";

const mockSlide = {
  id: "1",
  title: "Investing for Everybody",
  description: "We let you easily invest in fractional shares for as little as",
  span: " $1.",
  image: 1, // mocked
};

describe("SlideItem", () => {
  it("renders slide title", () => {
    const { getByText } = render(<SlideItem item={mockSlide} />);
    expect(getByText("Investing for Everybody")).toBeTruthy();
  });

  it("renders slide description", () => {
    const { getByText } = render(<SlideItem item={mockSlide} />);
    expect(
      getByText(/We let you easily invest in fractional shares/)
    ).toBeTruthy();
  });

  it("renders span text when provided", () => {
    const { getByText } = render(<SlideItem item={mockSlide} />);
    expect(getByText(" $1.")).toBeTruthy();
  });

  it("renders without span when not provided", () => {
    const slideNoSpan = { ...mockSlide, span: undefined };
    const { toJSON } = render(<SlideItem item={slideNoSpan} />);
    expect(toJSON()).toBeTruthy();
  });
});
