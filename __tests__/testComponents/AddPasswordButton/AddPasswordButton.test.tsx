import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test add password button component", () => {
  it("must have a button", () => {
    const AddPasswordButton = screen.getByRole("button");
    expect(AddPasswordButton).toBeInTheDocument();
  });
});
