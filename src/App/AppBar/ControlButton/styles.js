import styled, { css } from 'styled-components';

export const ControlButtonElem = styled.a`
    cursor: pointer;
    ${props => props.active && css`text-shadow: 3px 0px 30px #03ff03`}
`;