import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);

    const count = result.current.count;
    expect(count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 3,
      },
    });

    const count = result.current.count;
    expect(count).toBe(3);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.increment());

    const count = result.current.count;
    expect(count).toBe(1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.decrement());

    const count = result.current.count;
    expect(count).toBe(-1);
  });
});
