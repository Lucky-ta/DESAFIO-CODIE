import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #d22f2f;
    color: white;
    width: 100%;
    max-height: 5rem;

    display: flex;
    gap: 1.2rem;
    padding: 0.6rem;
    padding-left: 2.6rem;

    align-items: center;
    font-size: 1.4rem;
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
`;  

export const HeaderInput = styled.input`
    font-size: 1.4rem;
    font-weight: bold;
    border: none;
    width: 60%;
    height: 100%;
    padding-left: 3.6rem;
    background-color: #dc585a;

    ::placeholder {
        color: white;
        opacity: 0.5;
    }
`;
