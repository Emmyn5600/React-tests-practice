import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

test("renders a name", () => {
  render(<Person name='Jack' />);
  const linkElement = screen.getByText(/Name is Jack/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders a name", () => {
  render(<Person name='Jack' />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Name is Jack");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
