import styled, { css } from "styled-components";

export const MyButton = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

export const AnotherButton = styled.button`
  color: green;
  ${ props => props.primary && css`color: red;` }
`;

export const InheritedButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

export const SimpleButton = styled.button`
  background-color: white;
  border-color: ${props => (props.primary ? "#ccc" : "transparent")};
  color: ${props => (props.primary ? "#ccc" : "palevioletred")};
`;
