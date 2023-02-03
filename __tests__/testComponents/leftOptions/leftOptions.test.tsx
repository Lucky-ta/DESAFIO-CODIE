import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { LeftModal } from "components/Pages/Home/LeftModal";

describe("Test left options component", () => {
  beforeEach(() => {
    render(<LeftModal />);
  });

  it("must have a button called `Todos os itens`", () => {
    const allItemsButton = screen.getByText(/Todos os itens/i);
    expect(allItemsButton).toBeInTheDocument();
  });
});
