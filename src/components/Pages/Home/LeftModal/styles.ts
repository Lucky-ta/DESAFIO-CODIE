import styled from "styled-components";

export const LeftModal = styled.div`
  position: relative;
  background-color: #3d4a56;
  width: 100%;
  max-width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-bottom-right-radius: 6px;
  height: 40rem;

  @media (max-width: 1000px) {
    position: absolute;
    max-width: none;
    padding-top: 1rem;
  }

  @media only screen and (min-width: 700px) {
    animation-name: slidein;
    animation-duration: 0.8s;
    @keyframes slidein {
      from {
        margin-left: -40%;
      }
      to {
        margin-left: 0%;
        width: 100%;
      }
    }
  }

  button {
    color: white;
    background: none;
    background-color: #222f3b;
    border: none;
    width: 100%;
    padding: 1rem;
    padding-left: 1.5rem;
    display: flex;
    gap: 1.6rem;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 1.1rem;
    transition: all 0.3s;

    @media (max-width: 960px) {
      margin: auto;
      justify-content: center;
    }

    cursor: pointer;
    &&:hover {
      background-color: whitesmoke;
      color: #222f3b;
    }
  }
`;
