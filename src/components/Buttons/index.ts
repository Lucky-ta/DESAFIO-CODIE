import styled from "styled-components";

export const AddPasswordButton = styled.button`
    position: absolute;
    bottom: 2rem;
    right: 2rem;

    font-size: 2.6rem;
    padding: 0.8rem;
    display: flex;
    background: none;
    border-radius: 100%;
    cursor: pointer;
    background-color: #982220;
    color: white;
    border: 3px solid black;

    @media (max-width: 960px) {
        bottom: 3em;
  }
`;

export const CloseModalButton = styled.button`
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    border: none;
    background: none;

    position: absolute;
    right: 2rem;
    cursor: pointer;
`;

export const Button = styled.button`
    padding: 0.6rem;
    padding-left: 5rem;
    padding-right: 5rem;
    border: none;
    background-color: #b3b2b3;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 4px;
`;

export const ShowHidePasswordButton = styled.button`
  display: flex;
  position: absolute;
  right: 2.5rem;
  bottom: 4.7rem;
  font-size: 1.3rem;
  border: none;
  background: none;
  cursor: pointer;
`;
