import React from "react";
import { render } from "@testing-library/react";
import Bunner from "../component/Bunner/Bunner";
// import { describe } from "vitest";

describe("Bunner", () => {
  test("snapshot BUNNER", () => {
    const bunner = render(<Bunner />);
    expect(bunner).toMatchSnapshot();
  });
});
//
