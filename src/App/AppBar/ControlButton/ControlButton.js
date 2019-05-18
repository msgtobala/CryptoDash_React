import React from "react";

import { ControlButtonElem } from "./styles";
import { AppContext } from '../../AppProvider';

const toProperCase = text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();

const ControlButton = props => {
  return (
      <AppContext.Consumer>
          {
              ({page, setPage}) => (
                    <ControlButtonElem
                        active={page === props.name} 
                        onClick={()=> setPage(props.name)}> 
                        {toProperCase(props.name) }
                    </ControlButtonElem>
              )
          }
      </AppContext.Consumer>
  );
};

export default ControlButton;
