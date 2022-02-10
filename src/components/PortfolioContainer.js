import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioArray, onStockClick }) {
  const portfolioStocks = portfolioArray.map((stock) => {
    return <Stock stock={stock} onStockClick={onStockClick} />;
  });

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks}
    </div>
  );
}

export default PortfolioContainer;
