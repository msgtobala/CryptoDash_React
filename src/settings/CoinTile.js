import React from "react";

import { AppContext } from "../App/AppProvider";
import { SelectableTile, DeletableTile, DisabledTile } from "../Shared/styles";
import CoinHeaderGrid  from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

const CoinTile = ({ coinKey, topSection }) => {
  return (
    <AppContext>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (topSection) {
            TileClass = DeletableTile;
        }
        return <TileClass>
            <CoinHeaderGrid 
                name={coin.CoinName} 
                symbol = {coin.Symbol}
                topSection = {topSection} />
            <CoinImage coin = {coin} />
        </TileClass>;
      }}
    </AppContext>
  );
};

export default CoinTile;
