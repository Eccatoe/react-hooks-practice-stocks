import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockArray, setStockArray] = useState([]);
  const [portfolioArray, setPortfolioArray] = useState([]);
  const [category, setCategory] = useState("Tech");

  useEffect(() => {
    fetch("http://localhost:3000/stocks")
      .then((r) => r.json())
      .then((data) => setStockArray(data));
  }, []);

  function onBuyClick(stockToBuy) {
    if (portfolioArray.includes(stockToBuy)) {
      return portfolioArray;
    } else {
      setPortfolioArray([...portfolioArray, stockToBuy]);
    }
  }

  function onSellClick(stockToSell) {
    setPortfolioArray(
      portfolioArray.filter((stock) => stock.id !== stockToSell.id)
    );
  }

const filteredStocks=stockArray.filter((stock)=>stock.type=category)


  return (
    <div>
      <SearchBar
        setCategory={setCategory}
        category={category}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer onStockClick={onBuyClick} stockArray={filteredStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            onStockClick={onSellClick}
            portfolioArray={portfolioArray}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
