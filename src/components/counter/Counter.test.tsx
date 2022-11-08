import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();

    const increamentButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(increamentButton).toBeInTheDocument();

    const SetCountButton = screen.getByRole("button", {
      name: "Set",
    });
    expect(SetCountButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking button once", async () => {
    render(<Counter />);

    const increamentButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(increamentButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking button twice", async () => {
    user.setup();
    render(<Counter />);

    const increamentButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.tripleClick(increamentButton);
    await user.click(increamentButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("4");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();

    render(<Counter />);

    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toHaveTextContent("");

    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: /set/i });
    await user.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();

    render(<Counter />);

    const increamentButton = screen.getByRole("button", {
      name: "Increment",
    });
    const inputElement = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /set/i });

    await user.tab();
    expect(increamentButton).toHaveFocus();

    await user.tab();
    expect(inputElement).toHaveFocus();

    await user.tab();

    expect(setButton).toHaveFocus();
  });
});
