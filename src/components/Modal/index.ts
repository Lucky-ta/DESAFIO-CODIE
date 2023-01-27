import styled from "styled-components";

export const ModalHeader = styled.div`
    display: flex;
    width: 100%;
    background-color: #d22f2f;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
`;

export const ModalContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;
    padding-top: 3rem;
    
`

export const ModalButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    padding-right: 1rem;
    padding-top: 1rem;
`;
