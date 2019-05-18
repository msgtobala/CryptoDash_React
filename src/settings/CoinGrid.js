import React from "react";

import { AppContext } from "../App/AppProvider";
import { CoinGrid } from "./styles";

const coinGrid = () => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGrid>
          {Object.keys(coinList).map(coinKey => (
            <div key={coinKey}>{coinKey}</div>
          ))}
        </CoinGrid>
      )}
    </AppContext.Consumer>
  );
};

export default coinGrid;
