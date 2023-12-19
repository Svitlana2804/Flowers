import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import Button from "../component/Button/Button";
import { render, fireEvent, screen } from "@testing-library/react";
// import "vitest";
// import  from "vitest";
// import { expect } from "vitest";
// import { test } from "vitest";
// import { describe } from "vitest";
// const vitest = import("vitest").then((module) => module.default);

// Тест на подію кліку:
describe("Button", () => {
  test("click onClick", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click</Button>);
    fireEvent.click(getByText("Click"));
    expect(onClickMock).toHaveBeenCalled();
  });
  // Тести на тип та клас:
  test("type", () => {
    const { container } = render(<Button />);
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button.type).toBe("button");
  });
  test("class", () => {
    const { container } = render(<Button />);
    const button = container.querySelector(".button");

    expect(button).toBeInTheDocument();
    expect(button.className).toBe("button");
  });
  // фокус
  test("focus", () => {
    const { container } = render(<Button />);
    const button = container.querySelector("button");
    button.focus();
    expect(document.activeElement).toBe(button);
  });
  // наявність тексту на кнопкі
  test("isButton", () => {
    render(<Button>text</Button>);
    expect(screen.getByText("text"));
  });
  // пропси

  //   test("props in button", () => {
  //     render(<Button className="button-wrapper">text</Button>);
  //     expect(screen.getByText("text")).toHaveClass("button-wrapper");
  //   });
});
