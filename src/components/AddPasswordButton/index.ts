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
