import "@testing-library/jest-dom/vitest";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
test("renders home page heading", () => {
  render(<Home />);

  const heading = screen.getByText("HOME PAGE");

  expect(heading).toBeInTheDocument();
});