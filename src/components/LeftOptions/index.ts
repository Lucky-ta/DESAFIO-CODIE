import styled from "styled-components";

export const LeftOptionContainer = styled.div`
    background-color: #414a4c;
    width: 100%;
    height: 100%;
    max-width: 22rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const LeftOptionButton = styled.button`
    color: white;
    background: none;
    background-color: #232b2b;
    border: none;
    width: 100%;
    padding: 1rem;
    padding-left: 1.5rem;
    display: flex;
    gap: 1.6rem;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 2rem;
    transition: all 0.3s;

    cursor: pointer;
    &&:hover {

        background-color: whitesmoke;
        color: #232b2b;
    }
`;
