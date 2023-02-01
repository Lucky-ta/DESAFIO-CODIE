import styled from "styled-components";

export const PassCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    min-height: 10rem;
    border-radius: 2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    max-width: 20rem;

`
export const PassCardContentContainer = styled.div`
    background-color: #b9bec5;
    min-height: 50%;

    &.headerButton {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.content {
        display: flex;

    }

    &.infoContainer {
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 1rem;
        gap: 0.5rem;
        text-align: start;
        width: 100%;

    }

    &.buttons {
        background-color: white;
        display:flex;
        align-items: center;
        gap: 1rem;
        color: grey;
        padding-right: 1rem;
    }
`;

export const PassCardContent = styled.h3`
    &.name {
        color: black;
        font-size: 1.2rem;
        font-weight: bold;
    }

    &.email {
        font-size: 0.8rem;
        color: grey;
    }
`
