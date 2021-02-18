import React from "react";
import { render, screen } from "@testing-library/react";
import {BlockTable} from "./components/BlockTable";

test("renders learn react link", () => {
  render(<BlockTable />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
