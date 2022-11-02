import React from "react";
import { render } from "@testing-library/react";
import {DatePickerInput} from "./DatePicker"

test("Render Date Picker with value and label", () => {
  const { container } = render(<DatePickerInput value="November 2, 2022" setValues={()=>{}} values={{}}/>);
  expect(container.getElementsByClassName("form-control").item(0)).toHaveValue("November 2, 2022")
  expect(container.getElementsByTagName("span").item(0)).toHaveTextContent("Date of birth")
});