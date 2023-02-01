import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #d22f2f;
    color: white;
    width: 100%;
    max-height: 5rem;
    display: flex;
    padding: 1rem;
    padding-left: 2rem;
    font-size: 1.4rem;
    gap: 1.2rem;

    max-height: 5rem;
    align-items: center;
    padding-right: 2rem;

`;

export const HeaderTitle = styled.h2`
    @media (max-width: 560px) {
        position: absolute;
        top: 5.6rem;
        right: 1rem;
        font-size: 1.6rem;
        color: #22375a;
  }
`;

export const HeaderButton = styled.button`
    border: none;
    background: none;
    color: white;
    font-size: 2rem;
    position: absolute;
    margin-left: 11rem;
    display: flex;
    opacity: 0.5;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: 3.6rem;
    width: 3.6rem;

    @media (max-width: 560px) {
        margin: auto;
        margin-left: 0.2rem;
  }
`;

export const HeaderInput = styled.input`
    font-size: 1.4rem;
    font-weight: bold;
    border: none;
    width: 60%;
    height: 100%;
    padding: 0.7rem;
    padding-left: 3.6rem;
    background-color: #dc585a;

    @media (max-width: 560px) {
        width: 100%;
  }

    ::placeholder {
        color: white;
        opacity: 0.5;
    }
`;
