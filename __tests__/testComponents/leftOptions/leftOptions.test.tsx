import LeftOptions from "../../../src/components/Pages/Home/LeftOptions/LeftOptions";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test left options component", () => {
  beforeEach(() => {
    render(<LeftOptions />);
  });

  it("must have a button called `Todos os itens`", () => {
    const allItemsButton = screen.getByText(/Todos os itens/i);
    expect(allItemsButton).toBeInTheDocument();
  });
});
