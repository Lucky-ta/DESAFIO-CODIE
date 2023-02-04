import styled from "styled-components";

export const Header = styled.header`
  background-color: #d22f2f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  height: 5rem;
  h2 {
    margin: 0;
    font-size: 1.4rem;
    text-align: center;

    @media (max-width: 560px) {
      position: absolute;
      top: 5.6rem;
      right: 1rem;
      font-size: 1.6rem;
      color: #22375a;
    }
  }

  .left-modal-button {
    border: none;
    background: none;
    font-size: 1.6rem;
    cursor: pointer;
    color: white;
    &:hover {
      color: white;
    }
  }

  input {
    font-size: 1.4rem;
    font-weight: bold;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0.7rem;
    padding-left: 3rem;
    background-color: #dc585a;
    display: flex;
    align-items: center;

    &::placeholder {
      color: white;
      opacity: 0.5;
    }
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    cursor: pointer;
    z-index: 1;
  }

  div {
    display: flex;
    align-items: center;
    position: relative;
    width: 70%;
    margin-left: 1rem;

    @media (max-width: 560px) {
      width: 90%;
    }
  }
`;
