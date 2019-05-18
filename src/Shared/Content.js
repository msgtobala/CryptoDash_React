import React from "react";

import { AppContext } from "../App/AppProvider";

const content = props => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        if (!coinList) {
          return <div> Loading Coins </div>;
        } else {
          return props.children;
        }
      }}
    </AppContext.Consumer>
  );
};

export default content;
