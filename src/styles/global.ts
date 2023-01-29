import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }
`;

export const GlobalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    &.secondary {
      flex-direction: column;
    }

    &.third {
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 1rem;
      color: #2f2f31;
      font-weight: bold;
      font-size: 1.1rem;
      padding-left: 1rem;
      padding-top: 1rem;

      span {
        color: #707070;
      }
    }
`;
