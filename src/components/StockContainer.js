import React from "react";
import Stock from "./Stock";

function StockContainer({ stockArray, onStockClick }) {
  const stockTiles = stockArray.map((stock) => {
    return <Stock key={stock.id} stock={stock} onStockClick={onStockClick} />;
  });
  return (
    <div>
      <h2>Stocks</h2>
      {stockTiles}
    </div>
  );
}

export default StockContainer;
