import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTMl", "CSS", "JS"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("Start learning should not be displayed", () => {
    render(<Skills skills={skills} />);

    const buttonElement = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(buttonElement).not.toBeInTheDocument();
  });

  test("Start learning should be displayed at the beginning", async () => {
    render(<Skills skills={skills} />);

    const buttonElement = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(buttonElement).toBeInTheDocument();
  });
});
