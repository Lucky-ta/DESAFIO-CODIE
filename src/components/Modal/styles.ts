import styled from "styled-components";

import ReactModal from "react-modal";

export const Modal = styled(ReactModal)`
  label {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left: 1rem;
    margin-right: 1rem;
    gap: 1rem;
    padding-top: 0.6rem;
  }

  span {
    font-weight: bold;
    font-size: 1.1rem;
    color: #444654;
  }

  &.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    max-width: 90rem;
    background-color: #f2f3f6;
    padding: 0;
    padding-bottom: 1rem;
    text-align: center;
    border-radius: 6px;

    @media (max-width: 740px) {
      overflow: auto;
      max-width: none;
      width: 100%;
      height: 100%;
      padding: 0;
      padding-bottom: 2rem;
    }
  }

  .header {
    padding: 1rem;
    display: flex;
    width: 100%;
    background-color: #d22f2f;
    color: white;
    justify-content: center;
    align-items: center;

    .close-button {
      position: absolute;
      right: 2rem;

      button {
        color: white;
      }
    }

    @media (max-width: 485px) {
      justify-content: space-between;
    }
  }

  .form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding-top: 3rem;
    padding-bottom: 1rem;

    .toggle-button {
      position: relative;

      svg {
        position: absolute;
        right: 2rem;
        top: 0.5rem;
        bottom: 0;
        display: flex;
        align-items: center;
      }
    }

    @media (max-width: 740px) {
      display: flex;
      flex-direction: column;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    padding-right: 2rem;
    padding-left: 2rem;

    @media (max-width: 1420px) {
      justify-content: center;
    }

    @media (max-width: 630px) {
      flex-direction: column;
    }
  }

  .save-button {
    span {
      color: white;
    }
  }

  .loading-circle {
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    border-radius: 25px;
    border: 5px solid #ccc;
    border-top-color: #333;
    animation: spin 1s linear infinite;
    margin: auto;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
