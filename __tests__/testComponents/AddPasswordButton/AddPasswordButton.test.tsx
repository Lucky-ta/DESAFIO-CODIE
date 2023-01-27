import AddPasswordButton from "../../../src/components/AddPasswordButton/AddPasswordButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test add password button component", () => {
  beforeEach(() => {
    render(<AddPasswordButton />);
  });

  it("must have a button", () => {
    const AddPasswordButton = screen.getByRole("button");
    expect(AddPasswordButton).toBeInTheDocument();
  });
});
