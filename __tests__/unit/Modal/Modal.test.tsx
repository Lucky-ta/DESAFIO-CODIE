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

  describe("Test modal visibility", () => {
    it("must be visible at start", () => {
      const modalHeaderExitButton = screen.getByRole("button", {
        name: /X/i,
      });
      expect(modalHeaderExitButton).toBeVisible();
    });

    it("must be invisible after close modal", () => {
      const modalHeaderExitButton = screen.getByRole("button", {
        name: /X/i,
      });
      fireEvent.click(modalHeaderExitButton);
      expect(modalHeaderExitButton).not.toBeVisible();
    });
  });

  describe("Test modal header", () => {
    it("must have a title called `Adicionar senha`", () => {
      const modalHeaderTitle = screen.getByText(/Adicionar senha/i);
      expect(modalHeaderTitle).toBeInTheDocument();
    });

    it("must have a exit button", () => {
      const modalHeaderExitButton = screen.getByRole("button", {
        name: /X/i,
      });
      expect(modalHeaderExitButton).toBeInTheDocument();
    });
  });

  describe("Test modal form", () => {
    it("must have five text inputs", () => {
      const modalFormInputs = screen.getAllByRole("textbox");
      expect(modalFormInputs.length).toBe(5);
    });

    it("must have a button with the following text: `Cancelar`", () => {
      const modalFormCancelButton = screen.getByText(/Cancelar/i);
      expect(modalFormCancelButton).toBeInTheDocument();
    });

    it("must have a button with the following text: `Salvar`", () => {
      const modalFormSaveButton = screen.getByText(/Salvar/i);
      expect(modalFormSaveButton).toBeInTheDocument();
    });

    it("must have a show/hide password toggler", () => {
      const passwordToggle = screen.getByTestId("toggleButton");
      expect(passwordToggle).toBeInTheDocument();
    });
  });
});
