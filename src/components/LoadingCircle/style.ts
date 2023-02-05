import styled from "styled-components";

export const LoadingCircle = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    border-radius: 25px;
    border: 5px solid #ccc;
    border-top-color: #333;
    animation: spin 1s linear infinite;
    margin: auto;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
