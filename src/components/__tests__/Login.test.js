import { render } from "@testing-library/react";
import Login from "../../pages/Login";

test("Will not call onClick when disabled", () => {
  const mockHandler = jest.fn();

  render(
    <Button title="Disabled account" disabled={true} onClick={mockHandler} />
  );
  const button = screen.getByText("Disabled account");
  fireEvent.click(button);

  expect(mockHandler).toHaveBeenCalledTimes(0);
  expect(button).toHaveProperty("disabled", true);
});
