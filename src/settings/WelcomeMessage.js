import React from "react";

import { AppContext } from "../App/AppProvider";
import * as styles from './styles';

const welcomeMessage = () => {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <styles.IntroDiv>
            Welcome To CryptoDash, please select your favorite coin to begin
          </styles.IntroDiv>
        ) : null
      }
    </AppContext.Consumer>
  );
};

export default welcomeMessage;
