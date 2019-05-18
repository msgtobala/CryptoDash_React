import React from "react";

import { AppContext } from "../App/AppProvider";

const pages = props => {
  return (
    <AppContext.Consumer>
      {({ page }) => {
        if (page !== props.name) {
          return null;
        } else {
          return <div>{props.children}</div>;
        }
      }}
    </AppContext.Consumer>
  );
};

export default pages;
