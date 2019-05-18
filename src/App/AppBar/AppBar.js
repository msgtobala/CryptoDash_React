import React from 'react';

import ControlButton from './ControlButton/ControlButton';
import * as Bars from "./styles";

const AppBar = (props) => {
    return (
        <Bars.Bar>
            <Bars.Logo> CryptoDash </Bars.Logo>
            <div></div>
            <ControlButton name="Dashboard" active/> 
            <ControlButton name="settings" /> 
        </Bars.Bar>
    );
}

export default  AppBar;