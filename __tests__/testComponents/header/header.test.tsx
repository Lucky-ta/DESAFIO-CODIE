import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Header } from "components/Pages/Home/Header";

import MyProvider from "context/MyProvider";

describe("Test header component", () => {
  beforeEach(() => {
    render(
      <MyProvider>
        <Header files={[]} />
      </MyProvider>
    );
  });

  it("must have a title called `Almaden...`", () => {
    const headerTitle = screen.getByText(/Almaden.../i);
    expect(headerTitle).toBeInTheDocument();
  });
  it("must have a search input with placeholder named `Pesquisar no meu cofre`", () => {
    const searchInput = screen.getByPlaceholderText(/Pesquisar no meu cofre/i);
    expect(searchInput).toBeInTheDocument();
  });
});
