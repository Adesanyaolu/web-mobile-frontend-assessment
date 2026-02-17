import React from "react";
import { render } from "@testing-library/react-native";
import { Animated } from "react-native";
import Paginator from "@/components/Welcome/Paginator";

const mockData = [
  { id: "1", title: "Slide 1", description: "Desc 1", image: 1 },
  { id: "2", title: "Slide 2", description: "Desc 2", image: 2 },
];

describe("Paginator", () => {
  it("renders without crashing", () => {
    const scrollX = new Animated.Value(0);
    const { toJSON } = render(
      <Paginator data={mockData} scrollX={scrollX} />
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders correct number of dots for data items", () => {
    const scrollX = new Animated.Value(0);
    const { toJSON } = render(
      <Paginator data={mockData} scrollX={scrollX} />
    );
    const tree = toJSON();
    // The outer View contains a child View for each dot
    expect(tree).toBeTruthy();
    // Each slide maps to a dot container
    if (tree && "children" in tree) {
      expect(tree.children?.length).toBe(mockData.length);
    }
  });

  it("renders with empty data", () => {
    const scrollX = new Animated.Value(0);
    const { toJSON } = render(
      <Paginator data={[]} scrollX={scrollX} />
    );
    expect(toJSON()).toBeTruthy();
  });
});
