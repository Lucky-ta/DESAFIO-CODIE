import styled from "styled-components";

export const Button = styled.div`
  transition: all 0.2s;
  button {
    background: none;
    border: none;
    font-size: 2.3rem;
    cursor: pointer;
  }
`;

export const FormButton = styled.button`
  transition: all 0.2s;
  padding: 0.8rem;
  border: none;
  background-color: #b3b2b3;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  width: 23%;

  &&:hover {
    background-color: black;
    color: white;
  }
  &.save-button {
    background-color: #b92a2c;
    color: white;
    &&:hover {
      background-color: black;
    }
  }
  @media (max-width: 630px) {
    width: 100%;
  }
`;
