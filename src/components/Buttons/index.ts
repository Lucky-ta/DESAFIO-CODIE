import styled from "styled-components";

export const AddPasswordButton = styled.button`
    position: fixed;
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
    transition: all 0.2s;
    padding: 0.6rem;
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

    &.secondary {
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

export const ShowHidePasswordButton = styled.button`
  display: flex;
  position: absolute;
  right: 2.5rem;
  bottom: 4.7rem;
  font-size: 1.3rem;
  border: none;
  background: none;
  cursor: pointer;

  @media (max-width: 630px) {
       bottom: 10rem;
  }
`;

export const PasswordCardButton = styled.button`
    border: none;
    background-color: #586777;
    color: whitesmoke;

    width: 70%;
    height: 55%;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    &&:hover {
    color: black;
    background-color: whitesmoke;
  }
`

export const PassCardActionsButton = styled.button`
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: grey;

  &&:hover {
    color: black;
  }
`
