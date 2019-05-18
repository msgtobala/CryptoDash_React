import React from 'react';

import ControlButton from './ControlButton/ControlButton';
import * as Bars from "./styles";

const AppBar = () => {
    return (
        <Bars.Bar>
            <Bars.Logo> CryptoDash </Bars.Logo>
            <div></div>
            <ControlButton name="Dashboard"/> 
            <ControlButton name="Settings" /> 
        </Bars.Bar>
    );
}

export default  AppBar;