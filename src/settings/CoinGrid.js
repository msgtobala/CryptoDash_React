import React from "react";

import { AppContext } from "../App/AppProvider";
import { CoinGrid } from "./styles";
import CoinTile  from './CoinTile';


const getCoinsToDisplay = (coinList, topSection) => {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

const coinGrid = (props) => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGrid>
          {getCoinsToDisplay(coinList, props.topSection).map(coinKey => (
            <CoinTile topSection = {props.topSection} key={coinKey} coinKey={coinKey} />
          ))}
        </CoinGrid>
      )}
    </AppContext.Consumer>
  );
};

export default coinGrid;
