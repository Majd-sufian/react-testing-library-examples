import { render, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("renders the text correctly", () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole("heading", {
      name: /dark mode/i,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
