import styled from 'styled-components';

import { fontSize1, greenBoxShadow, color3, DeletableTile } from '../Shared/styles';

export const ConfirmButton = styled.button`
    cursor: pointer;
    margin: 20px;
    color: ${color3};
    padding: 5px;
    background-color: transparent;
    border: none;
    font: inherit;
    ${fontSize1}
    &:hover {
        ${greenBoxShadow}
    }
`;

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`;


export const IntroDiv = styled.div`
    font-size: 25px;
`;

export const CoinGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`;

export const CoinHeaderGridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
    justify-self: right;
`;

export const DeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeletableTile}:hover & {
        display: block;
        color: red;
    }
`;