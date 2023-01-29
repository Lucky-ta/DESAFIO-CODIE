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
`;
