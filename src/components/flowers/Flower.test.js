import React from "react";
import { render } from "@testing-library/react";
import Flower from "./Flower";

test("renders flower card informations", () => {
  const { container } = render(<Flower id={1} name={"Alpski volcin"} latin_name={"Daphne alpina"}/>);
  expect(container.getElementsByTagName("h3").item(0)).toHaveTextContent(
    "Alpski volcin"
  );
  expect(container.getElementsByClassName("card-text").item(0)).toHaveTextContent(
    "Daphne alpina"
  );
});