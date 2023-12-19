import React from "react";
import { render } from "@testing-library/react";
import Footer from "../composition/Footer/Footer";
// import { expect } from "vitest";
// import { describe } from 'vitest';

describe("Footer", () => {
  test("snapshot FOOTER", () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });
});
