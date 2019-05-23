import React from "react";

import { CoinHeaderGridStyled, CoinSymbol, DeleteIcon } from "./styles";

const CoinHeaderGrid = props => {
  return (
    <CoinHeaderGridStyled>
      <div>{props.name}</div>
      {props.topSection ? (
        <DeleteIcon> REMOVE </DeleteIcon>
      ) : (
        <CoinSymbol>{props.symbol}</CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
};

export default CoinHeaderGrid;
