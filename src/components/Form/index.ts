import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left: 1rem;
    margin-right: 1rem;
    gap: 0.6rem;
`;

export const FormFieldName = styled.span`
   font-weight: bold;
   font-size: 1.1rem;
   color: #444654;
`;

export const FormErrorMessage = styled.span`
    color: red;
`;
