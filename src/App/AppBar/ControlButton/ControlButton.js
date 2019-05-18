import React from "react";

import { ControlButtonElem } from "./styles";

const toProperCase = text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();

const ControlButton = props => {
  return <ControlButtonElem active={props.active}>{toProperCase(props.name) }</ControlButtonElem>;
};

export default ControlButton;
