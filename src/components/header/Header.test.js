import React from "react";
import {
  render,
  fireEvent,
  queryByPlaceholderText,
} from "@testing-library/react";
import { Header } from "./Header";

it("renders correctly", () => {
  const { queryByPlaceholderName } = render(<Header />);
  expect(queryByPlaceholderText("search_movies")).toBeTruthy();
});
