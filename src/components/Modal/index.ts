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

    @media (max-width: 485px) {
       justify-content: space-between;
  }
`;

export const ModalContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;
    padding-top: 3rem;

    @media (max-width: 740px) {
        display: flex;
        flex-direction: column;
    }
    
`

export const ModalButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    width: 100%;
    padding-top: 1rem;
    padding-right: 2rem;
    padding-left: 2rem;

    @media (max-width: 1420px) {
    justify-content: center;
    };

    @media (max-width: 630px) {
        padding-top: 3rem;
        flex-direction: column;
    }
`;
