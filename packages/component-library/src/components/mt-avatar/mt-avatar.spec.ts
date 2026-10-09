import { render, screen } from "@testing-library/vue";
import MtAvatar from "./mt-avatar.vue";

describe("mt-avatar", () => {
  it("shows the initials of the first and last word of the name", () => {
    render(MtAvatar, { props: { name: "John Doe" } });

    const result = screen.getByTestId("mt-avatar-initials");

    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent("JD");
  });

  it("shows a single initial when the name only contains one word", () => {
    render(MtAvatar, { props: { name: "Jane" } });

    const result = screen.getByTestId("mt-avatar-initials");

    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent("J");
  });
});
