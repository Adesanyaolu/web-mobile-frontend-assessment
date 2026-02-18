import { render } from "@testing-library/react-native";
import AuthHeaders from "../../components/Auth/AuthHeaders";

describe("AuthHeaders", () => {
  it("renders with default props", () => {
    const { getByText } = render(<AuthHeaders />);
    expect(getByText("Join Stockline")).toBeTruthy();
    expect(getByText("$1")).toBeTruthy();
  });

  it("renders with custom title", () => {
    const { getByText } = render(<AuthHeaders title="Hi There! 👋" />);
    expect(getByText("Hi There! 👋")).toBeTruthy();
  });

  it("renders with custom subtitle and highlighted text", () => {
    const { getByText } = render(
      <AuthHeaders
        title="Welcome"
        subtitle="Sign in to continue"
        highlightedText="now"
      />
    );
    expect(getByText("Welcome")).toBeTruthy();
    expect(getByText("now")).toBeTruthy();
  });

  it("renders with empty highlighted text", () => {
    const { getByText, queryByText } = render(
      <AuthHeaders
        title="Hi There! 👋"
        subtitle="Welcome back, Sign in to your account"
        highlightedText=""
      />
    );
    expect(getByText("Hi There! 👋")).toBeTruthy();
  });
});
