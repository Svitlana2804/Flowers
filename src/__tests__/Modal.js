import React from "react";
import Modal from "../component/Modal/Modal";
import "@testing-library/jest-dom";
import "@testing-library/react";
import "@testing-library/user-event";
import { render, fireEvent, waitFor } from "@testing-library/react";
// import { expect, test } from "vitest";
// import { test } from "vitest";
// import { describe } from "vitest";

describe("Modal", () => {
  test("isExist", () => {
    expect(<Modal />).toBeDefined();
  });
  test("className", () => {
    const { container } = render(<Modal />);
    const modal = container.querySelector(".modal");
    expect(modal).toBeInTheDocument();
  });
  //Закриття модального вікна
  test("close", async () => {
    const { container } = render(<Modal />);
    const element = container.querySelector(".modal-close");
    if (!element) {
      await new Error("Елемент з класом '.modal-close' не знайдено.");
    } else {
      throw fireEvent.click(element);
    }
  });

  //   test("isActive", async () => {
  //     const { container } = render(<Modal />);
  //     const modal = container.querySelector(".isActive");

  //     await waitFor(() => {
  //       expect(modal).toBeInTheDocument();
  //     });
  //   });
});
