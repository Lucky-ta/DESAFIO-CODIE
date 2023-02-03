import styled from "styled-components";

export const Header = styled.div`
  background-color: #d22f2f;
  color: white;
  width: 100%;
  max-height: 5rem;
  display: flex;
  padding: 1rem;
  padding-left: 2rem;
  font-size: 1.4rem;
  gap: 1rem;
  justify-content: space-around;
  max-height: 5rem;
  align-items: center;
  padding-right: 2rem;

  h2 {
    margin: auto;
    position: relative;
    margin-right: -3rem;

    @media (max-width: 560px) {
      position: absolute;
      margin: auto;
      top: 5.6rem;
      right: 1rem;
      font-size: 1.6rem;
      color: #22375a;
    }
  }

  input {
    font-size: 1.4rem;
    font-weight: bold;
    border: none;
    width: 60%;
    height: 100%;
    padding: 0.7rem;
    padding-left: 3.6rem;
    background-color: #dc585a;
    margin-right: 1rem;

    @media (max-width: 560px) {
      width: 100%;
    }

    ::placeholder {
      color: white;
      opacity: 0.5;
    }
  }

  .left-modal-button {
    border: none;
    background: none;
    font-size: 1.6rem;
    cursor: pointer;
    color: white;

    &&:hover {
      color: white;
    }
  }

  .header-button {
    border: none;
    background: none;
    color: white;
    font-size: 2rem;
    position: relative;
    display: flex;
    opacity: 0.5;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: 3.6rem;
    width: 3.6rem;
    left: 5rem;

    @media (max-width: 560px) {
      margin: auto;
      margin-left: 0.2rem;
    }
  }
`;
