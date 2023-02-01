import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MyProvider from "../../../src/context/MyProvider";
import Home from "../../../src/pages";
import "@testing-library/jest-dom";
import { filesMock } from "../../../__mocks__/dataMock/fileMock";

jest.mock("swr", () => {
  return {
    __esModule: true,
    default: jest.fn(() => ({
      data: filesMock,
    })),
  };
});

describe("Test modal component", () => {
  beforeEach(async () => {
    render(
      <MyProvider>
        <Home />
      </MyProvider>
    );

    await waitFor(() => screen.getByTestId("openModalButton"));
    const openModalButton = screen.getByTestId("openModalButton");
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

    it("must be possible to type on all inputs", () => {
      const mockUrlValue = "https://google.com";
      const mockNameValue = "Lucas";
      const mockFilelValue = "GOOGLE";
      const mockEmailValue = "someemail@gmail.com";
      const mockPasswordValue = "123password";

      const urlInput: any = screen.getByLabelText("URL:");
      const nameInput: any = screen.getByLabelText("Nome:");
      const fileInput: any = screen.getByLabelText("Pasta:");
      const emailInput: any = screen.getByLabelText("Nome de usuário:");
      const passwordInput: any = screen.getByLabelText("Senha do site:");

      fireEvent.change(urlInput, { target: { value: mockUrlValue } });
      fireEvent.change(nameInput, { target: { value: mockNameValue } });
      fireEvent.change(fileInput, { target: { value: mockFilelValue } });
      fireEvent.change(emailInput, { target: { value: mockEmailValue } });
      fireEvent.change(passwordInput, { target: { value: mockPasswordValue } });

      expect(urlInput.value).toBe(mockUrlValue);
      expect(nameInput.value).toBe(mockNameValue);
      expect(fileInput.value).toBe(mockFilelValue);
      expect(emailInput.value).toBe(mockEmailValue);
      expect(passwordInput.value).toBe(mockPasswordValue);
    });
  });
});
