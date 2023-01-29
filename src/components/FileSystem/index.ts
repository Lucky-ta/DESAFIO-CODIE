import styled from "styled-components"

export const FileSystemContainer = styled.div`
    display: flex;
    width: 100%;
    padding-left: 1rem;

    &.fileContainer {
        flex-direction: column;
        padding-left: 1rem;
        padding-right: 1rem;
        @media (max-width: 1000px) {
        margin-bottom: 10rem;
  }
    }

    &.fileContent {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
        padding: 0.6rem;
        padding-top: 1rem;

    }
`

export const FileSystemFileName = styled.span`
    color: #8f8e90;
    font-weight: bold;
`
