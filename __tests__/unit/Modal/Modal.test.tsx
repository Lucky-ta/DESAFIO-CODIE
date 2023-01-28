import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../../src/pages";
import MyProvider from "../../../src/context/MyProvider";

describe("Test modal component", () => {
  beforeEach(() => {
    render(
      <MyProvider>
        <Home />
      </MyProvider>
    );
    const openModalButton = screen.getByTestId("openModal");
    fireEvent.click(openModalButton);
  });

  describe("Test modal header", () => {
    it("must have a title called `Adicionar senha`", () => {
      const modalHeaderTitle = screen.getByText(/Adicionar senha/i);
      expect(modalHeaderTitle).toBeInTheDocument();
    });
    it("must have a exit button", () => {
      // const modalHeaderExitButton = screen.getByRole("button", {
      //   description: /X/i,
      // });
      // expect(modalHeaderExitButton).toBeInTheDocument();
    });
  });

  describe("Test modal form", () => {
    it("must have five text inputs", () => {});
    it("must have 2 buttons", () => {});
    it("must have a button with the following text: `Cancelar`", () => {});
    it("must have a button with the following text: `Salvar`", () => {});
    it("must have a show/hide password toggler", () => {});
  });
});
