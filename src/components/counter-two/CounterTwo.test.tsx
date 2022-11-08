import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={1} />);

    const headingElement = screen.getByRole("heading", {
      name: /counter two/i,
    });
    expect(headingElement).toBeInTheDocument();

    const countElement = screen.getByTitle(/count/i);
    expect(countElement).toHaveTextContent("1");
  });

  test("handlers are called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={1}
        handleDecrement={incrementHandler}
        handleIncrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /decrement/i,
    });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toBeCalledTimes(1);
    expect(decrementHandler).toBeCalledTimes(1);
  });
});
