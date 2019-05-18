import React from "react";

import * as styles from "./styles";
import { AppContext } from "../App/AppProvider";

const confirmButton = props => {
  return (
    <styles.CenterDiv>
      <AppContext.Consumer>
        {({ confirmFavorites }) => (
          <styles.ConfirmButton onClick={confirmFavorites}>
            {" "}
            {props.btnName}{" "}
          </styles.ConfirmButton>
        )}
      </AppContext.Consumer>
    </styles.CenterDiv>
  );
};

export default confirmButton;
